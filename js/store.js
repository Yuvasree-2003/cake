document.addEventListener('DOMContentLoaded', () => {
    // Shared Store Logic: Cart & Wishlist
    // Product names are always looked up from productsData (data.js) by ID,
    // so renaming a product in data.js automatically updates the cart & wishlist display.

    // Helper: look up a product by ID from the global productsData array
    function getProductById(id) {
        if (typeof productsData === 'undefined') return null;
        return productsData.find(p => p.id === id) || null;
    }

    // Helper: get the display name for a cart/wishlist item.
    // Uses the current name from data.js if found; falls back to the stored name.
    function resolveProductName(id, fallbackName) {
        const product = getProductById(id);
        return product ? product.name : (fallbackName || id);
    }

    // ── CART LOGIC ────────────────────────────────────────────────────────────
    // Cart items are stored as: { id, name, price, image }
    // `id`   → stable product ID (never changes; used as the permanent key)
    // `name` → name at the time of adding (used as fallback if product is deleted)
    // `price`, `image` → stored at add-time (reflect the price/image when added)
    let cart = JSON.parse(localStorage.getItem('whisk_cart')) || [];

    const cartCountEls = document.querySelectorAll('.cart-count');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');

    // Make updateCartUI global so products.js can call it
    window.updateCartUI = function () {
        if (!cartSidebar) return;

        const totalItems = cart.length;
        cartCountEls.forEach(el => {
            el.textContent = totalItems;
            el.style.display = totalItems > 0 ? 'inline-block' : 'none';
        });

        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach((item, index) => {
                // Always resolve the latest name from data.js
                const displayName = resolveProductName(item.id, item.name);
                total += parseInt(item.price);
                const itemEl = document.createElement('div');
                itemEl.className = 'cart-item';
                itemEl.innerHTML = `
                    <img src="${item.image}" alt="${displayName}">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${displayName}</div>
                        <div class="cart-item-price">₹${item.price}</div>
                    </div>
                    <i class="fa-solid fa-trash remove-item" data-index="${index}"></i>
                `;
                cartItemsContainer.appendChild(itemEl);
            });
        }

        cartTotalPrice.textContent = `₹${total}`;
        localStorage.setItem('whisk_cart', JSON.stringify(cart));

        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                cart.splice(index, 1);
                window.updateCartUI();
            });
        });
    };

    // addToCart now accepts a product ID (stable) plus display data
    window.addToCart = function (productId, price, image, fallbackName) {
        const product = getProductById(productId);
        const name = product ? product.name : (fallbackName || productId);
        cart.push({ id: productId, name, price, image });
        window.updateCartUI();
        if (cartSidebar && cartOverlay) {
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
        }
    };

    if (document.getElementById('nav-cart')) {
        document.getElementById('nav-cart').addEventListener('click', () => {
            cartSidebar.classList.add('active');
            cartOverlay.classList.add('active');
        });

        document.querySelector('.close-cart').addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
        });

        cartOverlay.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
        });

        document.getElementById('checkout-btn').addEventListener('click', () => {
            if (cart.length === 0) return alert('Your cart is empty!');

            let message = `*Hello Whisk & Wish, I would like to place an order from my Cart!*\n\n*My Order:*\n`;
            let total = 0;
            cart.forEach((item, index) => {
                // Always use the latest name from data.js in the WhatsApp message
                const displayName = resolveProductName(item.id, item.name);
                message += `${index + 1}. ${displayName} - ₹${item.price}\n`;
                total += parseInt(item.price);
            });
            message += `\n*Total Amount:* ₹${total}\n\nPlease let me know the payment options.`;

            const waLink = `https://wa.me/917305600109?text=${encodeURIComponent(message)}`;
            window.open(waLink, '_blank');
        });
    }

    // ── WISHLIST LOGIC ────────────────────────────────────────────────────────
    // Wishlist stores product IDs (stable keys), not names.
    // Names are always resolved from data.js at render time.
    let wishlist = JSON.parse(localStorage.getItem('whisk_wishlist')) || [];

    // Migration: if old wishlist contains names (strings that aren't valid IDs),
    // silently discard them so there's no stale data displayed.
    if (wishlist.length > 0 && typeof productsData !== 'undefined') {
        const validIds = new Set(productsData.map(p => p.id));
        const cleaned = wishlist.filter(entry => validIds.has(entry));
        if (cleaned.length !== wishlist.length) {
            wishlist = cleaned;
            localStorage.setItem('whisk_wishlist', JSON.stringify(wishlist));
        }
    }

    const wishlistCountEls = document.querySelectorAll('.wishlist-count');
    const wishlistModal = document.getElementById('wishlist-modal');
    const wishlistItemsContainer = document.getElementById('wishlist-items');

    window.updateWishlistUI = function () {
        if (!wishlistModal) return;

        const totalItems = wishlist.length;
        wishlistCountEls.forEach(el => {
            el.textContent = totalItems;
            el.style.display = totalItems > 0 ? 'inline-block' : 'none';
        });

        // Update all heart icons on the page (match by data-product-id)
        document.querySelectorAll('.product-heart').forEach(heart => {
            const productId = heart.getAttribute('data-product-id');
            if (!productId) return;
            if (wishlist.includes(productId)) {
                heart.classList.add('active');
                heart.classList.replace('fa-regular', 'fa-solid');
            } else {
                heart.classList.remove('active');
                heart.classList.replace('fa-solid', 'fa-regular');
            }
        });

        localStorage.setItem('whisk_wishlist', JSON.stringify(wishlist));
    };

    // Toggle wishlist on heart click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('product-heart')) {
            const productId = e.target.getAttribute('data-product-id');
            if (!productId) return;
            if (wishlist.includes(productId)) {
                wishlist = wishlist.filter(item => item !== productId);
            } else {
                wishlist.push(productId);
            }
            window.updateWishlistUI();
        }
    });

    if (document.getElementById('nav-wishlist')) {
        document.getElementById('nav-wishlist').addEventListener('click', () => {
            wishlistItemsContainer.innerHTML = '';
            if (wishlist.length === 0) {
                wishlistItemsContainer.innerHTML = '<p style="grid-column: 1/-1;">Your wishlist is empty.</p>';
            } else {
                wishlist.forEach(productId => {
                    // Resolve the current name from data.js
                    const displayName = resolveProductName(productId, productId);
                    const product = getProductById(productId);
                    const itemEl = document.createElement('div');
                    itemEl.style.padding = '1rem';
                    itemEl.style.border = '1px solid rgba(109, 76, 65, 0.1)';
                    itemEl.style.borderRadius = '10px';
                    itemEl.innerHTML = `
                        ${product ? `<img src="${product.image}" alt="${displayName}" style="width:100%; border-radius:8px; margin-bottom:0.5rem; object-fit:cover; max-height:120px;">` : ''}
                        <h4 style="margin-bottom: 0.5rem;">${displayName}</h4>
                        ${product ? `<p style="margin-bottom:0.5rem; color: var(--accent-gold); font-weight:600;">₹${product.price}</p>` : ''}
                        <button class="btn btn-primary btn-sm remove-wishlist-btn" style="padding: 0.5rem 1rem; font-size: 0.8rem;" data-product-id="${productId}">Remove</button>
                    `;
                    wishlistItemsContainer.appendChild(itemEl);
                });

                document.querySelectorAll('.remove-wishlist-btn').forEach(btn => {
                    btn.addEventListener('click', (ev) => {
                        const productId = ev.target.getAttribute('data-product-id');
                        wishlist = wishlist.filter(i => i !== productId);
                        window.updateWishlistUI();
                        ev.target.closest('div').remove();
                        if (wishlist.length === 0) {
                            wishlistItemsContainer.innerHTML = '<p style="grid-column: 1/-1;">Your wishlist is empty.</p>';
                        }
                    });
                });
            }
            wishlistModal.classList.add('active');
        });

        document.querySelector('.close-wishlist').addEventListener('click', () => {
            wishlistModal.classList.remove('active');
        });
    }

    // Initialize UI
    window.updateCartUI();
    window.updateWishlistUI();
});
