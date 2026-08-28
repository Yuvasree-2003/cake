document.addEventListener('DOMContentLoaded', () => {

    // ── 1. Render Featured / Signature Bakes section from data.js ─────────────
    const featuredScrollEl = document.getElementById('featured-scroll');
    if (featuredScrollEl && typeof featuredProducts !== 'undefined') {
        featuredScrollEl.innerHTML = '';
        featuredProducts.forEach(item => {
            const card = document.createElement('div');
            card.className = 'featured-card glass';
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="featured-info">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="price">${item.priceLabel}</div>
                </div>
            `;
            featuredScrollEl.appendChild(card);
        });

        // Arrow navigation for featured carousel
        const prevBtn = document.getElementById('featured-prev');
        const nextBtn = document.getElementById('featured-next');
        const cardWidth = () => featuredScrollEl.querySelector('.featured-card')?.offsetWidth + 32 || 432; // card + gap

        prevBtn?.addEventListener('click', () => {
            featuredScrollEl.scrollBy({ left: -cardWidth(), behavior: 'smooth' });
        });
        nextBtn?.addEventListener('click', () => {
            featuredScrollEl.scrollBy({ left: cardWidth(), behavior: 'smooth' });
        });
    }

    // ── 2. Render Homepage Category Grid from data.js ─────────────────────────
    const categoryGridEl = document.getElementById('homepage-category-grid');
    if (categoryGridEl && typeof categoryCards !== 'undefined') {
        categoryGridEl.innerHTML = '';
        categoryCards.forEach((cat, index) => {
            const delay = (index % 4) * 0.1;
            const badgeHTML = cat.badge
                ? `<div class="badges"><span class="badge new">${cat.badge}</span></div>`
                : '';
            const categoryURL = `products.html?category=${encodeURIComponent(cat.category)}`;

            const card = document.createElement('div');
            card.className = 'product-card fade-in-up';
            card.style.animationDelay = `${delay}s`;
            card.innerHTML = `
                <div class="product-img-wrapper">
                    <img src="${cat.image}" alt="${cat.name}">
                    ${badgeHTML}
                </div>
                <div class="product-info">
                    <h3 class="product-title">${cat.name}</h3>
                    <p class="product-desc">${cat.description}</p>
                    <div class="product-actions">
                        <a href="${categoryURL}" class="btn btn-primary" style="width: 100%;">View Products</a>
                    </div>
                </div>
            `;
            categoryGridEl.appendChild(card);
        });
    }

    // ── 3. Sticky Navbar ───────────────────────────────────────────────────────
    const navbar = document.querySelector('.navbar');
    const scrollTopBtn = document.querySelector('.scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar && navbar.classList.add('scrolled');
            scrollTopBtn && scrollTopBtn.classList.add('visible');
        } else {
            navbar && navbar.classList.remove('scrolled');
            scrollTopBtn && scrollTopBtn.classList.remove('visible');
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ── 4. Scroll Animations (Intersection Observer) ───────────────────────────
    const fadeElements = document.querySelectorAll('.why-card, .product-card, .about-content, .about-img, .contact-info');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    // ── 5. Testimonial Carousel ────────────────────────────────────────────────
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(t => t.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
        });
    });

    if (testimonials.length > 0) {
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }

    // ── 6. FAQ Accordion ───────────────────────────────────────────────────────
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains('active');

            document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
            document.querySelectorAll('.accordion-header').forEach(h => {
                h.classList.remove('active');
                const icon = h.querySelector('i');
                if (icon) icon.className = 'fas fa-plus';
            });

            if (!isActive) {
                header.classList.add('active');
                const icon = header.querySelector('i');
                if (icon) icon.className = 'fas fa-minus';
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // ── 7. Search Overlay (Homepage) ───────────────────────────────────────────
    const searchToggle = document.getElementById('search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const closeSearch = document.querySelector('.close-search');

    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            if (searchInput) searchInput.focus();
        });

        if (closeSearch) {
            closeSearch.addEventListener('click', () => {
                searchOverlay.classList.remove('active');
                if (searchInput) searchInput.value = '';
                if (searchResults) searchResults.innerHTML = '';
            });
        }

        if (searchInput) {
            searchInput.addEventListener('input', () => {
                const query = searchInput.value.trim().toLowerCase();
                searchResults.innerHTML = '';
                if (!query || typeof productsData === 'undefined') return;

                const matches = productsData.filter(p =>
                    p.available !== false &&
                    (p.name.toLowerCase().includes(query) ||
                     p.category.toLowerCase().includes(query) ||
                     (p.description && p.description.toLowerCase().includes(query)))
                );

                if (matches.length === 0) {
                    searchResults.innerHTML = '<p style="text-align:center; color:#888; padding:1rem;">No products found.</p>';
                    return;
                }

                matches.forEach(p => {
                    const item = document.createElement('div');
                    item.className = 'search-result-item';
                    item.innerHTML = `
                        <img src="${p.image}" alt="${p.name}">
                        <div>
                            <div class="search-result-name">${p.name}</div>
                            <div class="search-result-cat">${p.category} · ₹${p.price}</div>
                        </div>
                        <a href="products.html?category=${encodeURIComponent(p.category)}" class="btn btn-primary" style="padding:0.4rem 1rem; font-size:0.85rem; white-space:nowrap;">View</a>
                    `;
                    searchResults.appendChild(item);
                });
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchOverlay) {
                searchOverlay.classList.remove('active');
                if (searchInput) searchInput.value = '';
                if (searchResults) searchResults.innerHTML = '';
            }
        });
    }

    // ── 8. Mobile Hamburger Menu ──────────────────────────────────────────────
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const closeMobileNav = document.querySelector('.close-mobile-nav');

    function openMobileNav() {
        mobileNav && mobileNav.classList.add('active');
        mobileNavOverlay && mobileNavOverlay.classList.add('active');
    }
    function closeMobileNavFn() {
        mobileNav && mobileNav.classList.remove('active');
        mobileNavOverlay && mobileNavOverlay.classList.remove('active');
    }

    // Support both .menu-toggle and #menu-toggle-btn
    const menuToggleEl = menuToggleBtn || document.querySelector('.menu-toggle');
    if (menuToggleEl) menuToggleEl.addEventListener('click', openMobileNav);
    if (closeMobileNav) closeMobileNav.addEventListener('click', closeMobileNavFn);
    if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileNavFn);

    // ── 9. Custom Cake Order Form ──────────────────────────────────────────────
    // The form uses formsubmit.co to email the details to the bakery.
    // We let the form submit naturally (no preventDefault) so the email is sent.
    // We also open WhatsApp with the same details in a new tab.
    const orderForm = document.getElementById('customize-form');
    const waButton = document.getElementById('wa-order-btn');

    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            // Get values BEFORE the form submits/navigates
            const customerName = orderForm.querySelector('[name="name"]').value;
            const phone = orderForm.querySelector('[name="phone"]').value;
            const email = orderForm.querySelector('[name="email"]').value;
            const date = orderForm.querySelector('[name="date"]').value;
            const weight = orderForm.querySelector('[name="weight"]').value;
            const flavor = orderForm.querySelector('[name="flavor"]').value;
            const special = orderForm.querySelector('[name="special"]').value;

            // Build WhatsApp message
            const message =
                `*Hello Whisk & Wish, I would like to order a custom cake!*\n\n` +
                `*Customer Details:*\n` +
                `Name: ${customerName}\n` +
                `Phone: ${phone}\n` +
                `Email: ${email}\n\n` +
                `*Order Details:*\n` +
                `Flavor: ${flavor}\n` +
                `Weight: ${weight}\n` +
                `Delivery Date: ${date}\n` +
                `Special Instructions: ${special || 'None'}\n\n` +
                `Please confirm my order.`;

            // Open WhatsApp in a new tab (email sent by formsubmit.co automatically)
            window.open(`https://wa.me/917305600109?text=${encodeURIComponent(message)}`, '_blank');

            // Allow the form's natural POST to formsubmit.co to proceed (sends email)
            // No e.preventDefault() — the form will navigate to the success page
        });
    }

    // ── 10. General WhatsApp Floating Button ───────────────────────────────────
    if (waButton) {
        waButton.addEventListener('click', (e) => {
            e.preventDefault();
            const message = `Hello Whisk & Wish,\nI would like to place an order.\n\nProduct:\nQuantity:\nDelivery Date:\n\nMy Name:\nPhone Number:`;
            window.open(`https://wa.me/917305600109?text=${encodeURIComponent(message)}`, '_blank');
        });
    }

});
