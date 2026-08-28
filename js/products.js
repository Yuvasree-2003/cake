document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const grid = document.getElementById('product-grid');
    const categoryList = document.getElementById('category-list');
    const activeFiltersContainer = document.getElementById('active-filters');

    if (!grid) return;

    // State
    let currentCategory = null;

    // Check URL for category
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('category')) {
        currentCategory = decodeURIComponent(urlParams.get('category'));
    }

    // Extract unique categories from data
    const categories = [...new Set(productsData.map(p => p.category))].sort();

    // Render Categories Sidebar
    function renderCategories() {
        categoryList.innerHTML = '';

        const allLi = document.createElement('li');
        allLi.textContent = "All Products";
        if (!currentCategory) allLi.classList.add('active');
        allLi.addEventListener('click', () => { currentCategory = null; updateURL(null); renderAll(); });
        categoryList.appendChild(allLi);

        categories.forEach(cat => {
            const li = document.createElement('li');
            li.textContent = cat;
            if (currentCategory === cat) li.classList.add('active');
            li.addEventListener('click', () => { currentCategory = cat; updateURL(cat); renderAll(); });
            categoryList.appendChild(li);
        });
    }

    function updateURL(cat) {
        const url = new URL(window.location);
        if (cat) { url.searchParams.set('category', cat); } else { url.searchParams.delete('category'); }
        window.history.pushState({}, '', url);
    }

    // Show all products — egg preference handled at order time
    function getFilteredProducts() {
        let filtered = productsData.filter(p => p.available !== false);
        if (currentCategory) filtered = filtered.filter(p => p.category === currentCategory);
        return filtered;
    }

    function renderProducts(products) {
        grid.innerHTML = '';
        if (products.length === 0) {
            grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem;">No products found.</div>';
            return;
        }

        products.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card fade-in-up';

            const wishlist = JSON.parse(localStorage.getItem('whisk_wishlist')) || [];
            const isWished = wishlist.includes(p.id);
            const heartClass = isWished ? 'fa-solid active' : 'fa-regular';

            const weightLabel = p.weight ? `<span class="product-weight"><i class="fa-solid fa-weight-scale"></i> ${p.weight}</span>` : '';

            card.innerHTML = `
                <i class="${heartClass} fa-heart product-heart" data-product-id="${p.id}" title="Add to Wishlist"></i>
                <div class="product-img-wrapper">
                    <img src="${p.image}" alt="${p.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${p.name}</h3>
                    ${p.description ? `<p class="product-desc">${p.description}</p>` : ''}
                    <div class="product-meta">
                        ${weightLabel}
                        <span class="product-price">₹${p.price}</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary order-btn" style="width: 100%;"
                            data-product-id="${p.id}"
                            data-price="${p.price}"
                            data-image="${p.image}">Add to Cart</button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        document.querySelectorAll('.order-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                window.addToCart(
                    btn.getAttribute('data-product-id'),
                    btn.getAttribute('data-price'),
                    btn.getAttribute('data-image')
                );
            });
        });
    }

    function renderActiveFilters() {
        activeFiltersContainer.innerHTML = '';
        if (currentCategory) {
            activeFiltersContainer.innerHTML = `<span class="filter-tag">${currentCategory} <i class="fa-solid fa-xmark clear-cat" style="cursor: pointer;"></i></span>`;
            const clearBtn = document.querySelector('.clear-cat');
            if (clearBtn) clearBtn.addEventListener('click', () => { currentCategory = null; updateURL(null); renderAll(); });
        }
    }

    function renderAll() {
        renderCategories();
        renderActiveFilters();
        renderProducts(getFilteredProducts());
    }

    renderAll();

    // ── Search Overlay ─────────────────────────────────────────────────────────
    const searchToggle = document.getElementById('search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const closeSearch = document.querySelector('.close-search');

    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', () => { searchOverlay.classList.add('active'); searchInput.focus(); });
        closeSearch && closeSearch.addEventListener('click', closeSearchFn);
        document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearchFn(); });
    }

    function closeSearchFn() {
        searchOverlay && searchOverlay.classList.remove('active');
        if (searchInput) searchInput.value = '';
        if (searchResults) searchResults.innerHTML = '';
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const q = searchInput.value.trim().toLowerCase();
            searchResults.innerHTML = '';
            if (!q) return;

            const matches = productsData.filter(p =>
                p.available !== false &&
                (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q)))
            );

            if (!matches.length) { searchResults.innerHTML = '<p style="text-align:center;color:#888;padding:1rem;">No products found.</p>'; return; }

            matches.forEach(p => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.innerHTML = `
                    <img src="${p.image}" alt="${p.name}">
                    <div style="flex:1">
                        <div class="search-result-name">${p.name}</div>
                        <div class="search-result-cat">${p.category} · ${p.weight || ''} · ₹${p.price}</div>
                    </div>
                    <button class="btn btn-primary" style="padding:0.4rem 1rem;font-size:0.85rem;" data-product-id="${p.id}" data-price="${p.price}" data-image="${p.image}">Add</button>
                `;
                item.querySelector('button').addEventListener('click', e => {
                    window.addToCart(e.target.getAttribute('data-product-id'), e.target.getAttribute('data-price'), e.target.getAttribute('data-image'));
                    closeSearchFn();
                });
                searchResults.appendChild(item);
            });
        });
    }

    // ── Mobile Nav ─────────────────────────────────────────────────────────────
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const closeMobileNav = document.querySelector('.close-mobile-nav');

    const openNav = () => { mobileNav?.classList.add('active'); mobileNavOverlay?.classList.add('active'); };
    const closeNav = () => { mobileNav?.classList.remove('active'); mobileNavOverlay?.classList.remove('active'); };

    menuToggleBtn?.addEventListener('click', openNav);
    closeMobileNav?.addEventListener('click', closeNav);
    mobileNavOverlay?.addEventListener('click', closeNav);

    // ── Sticky Navbar ──────────────────────────────────────────────────────────
    const navbar = document.querySelector('.navbar');
    const scrollTopBtn = document.querySelector('.scroll-top');

    window.addEventListener('scroll', () => {
        navbar?.classList.toggle('scrolled', window.scrollY > 50);
        scrollTopBtn?.classList.toggle('visible', window.scrollY > 50);
    });

    scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // ── Mobile Filter Sidebar Toggle ──────────────────────────────────────────
    const filterToggle = document.getElementById('mobile-filter-toggle');
    const filtersSidebar = document.getElementById('filters-sidebar');
    const filterOverlay = document.getElementById('mobile-filter-overlay');
    const closeFilters = document.getElementById('close-filters');

    const openFilters = () => {
        filtersSidebar?.classList.add('active');
        filterOverlay?.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    const closeFiltersFn = () => {
        filtersSidebar?.classList.remove('active');
        filterOverlay?.classList.remove('active');
        document.body.style.overflow = '';
    };

    filterToggle?.addEventListener('click', openFilters);
    closeFilters?.addEventListener('click', closeFiltersFn);
    filterOverlay?.addEventListener('click', closeFiltersFn);

    // Close filters when a category is tapped on mobile
    categoryList?.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI' && window.innerWidth <= 900) {
            closeFiltersFn();
        }
    });

    // ── Scroll Reveal Animation ───────────────────────────────────────────────
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe product cards as they're added
    const gridObserver = new MutationObserver(() => {
        document.querySelectorAll('.product-card').forEach(card => {
            if (!card.dataset.observed) {
                card.dataset.observed = 'true';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                revealObserver.observe(card);
            }
        });
    });
    if (grid) gridObserver.observe(grid, { childList: true });
});
