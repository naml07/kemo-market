// ============================================================
// KEMO MARKET — main.js
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. TOPBAR CLOSE ────────────────────────────────────────
  const topbarClose = document.querySelector('.topbar-close');
  const topbar = document.querySelector('.topbar');
  if (topbarClose && topbar) {
    topbarClose.addEventListener('click', () => {
      topbar.style.maxHeight = '0';
      topbar.style.overflow = 'hidden';
      topbar.style.padding = '0';
      setTimeout(() => topbar.remove(), 300);
    });
  }

  // ── 2. FLASH SALE TIMER ─────────────────────────────────────
  function startFlashTimer() {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 5, endTime.getMinutes() + 47, endTime.getSeconds() + 23);

    function updateTimer() {
      const now = new Date();
      let diff = Math.max(0, Math.floor((endTime - now) / 1000));

      const h = Math.floor(diff / 3600);
      const m = Math.floor((diff % 3600) / 60);
      const s = diff % 60;

      const setTimer = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = String(val).padStart(2, '0');
      };

      setTimer('timer-h', h);
      setTimer('timer-m', m);
      setTimer('timer-s', s);
    }

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  if (document.getElementById('timer-h')) startFlashTimer();

  // ── 3. INTERSECTION OBSERVER — Scroll Animations ────────────
  const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -50px 0px' };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${(i % 4) * 0.1}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // CSS class toggle for intersection
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.addEventListener('transitionend', () => {
      el.style.opacity = '';
      el.style.transform = '';
    }, { once: true });
  });

  // Patch observer to apply styles
  const styleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        styleObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => styleObserver.observe(el));

  // ── 4. SEARCH ───────────────────────────────────────────────
  const searchInput = document.querySelector('.nav-search input');
  const searchBtn = document.querySelector('.nav-search-btn');

  function doSearch() {
    const q = searchInput?.value?.trim();
    if (q) window.location.href = `catalogue.html?q=${encodeURIComponent(q)}`;
  }

  if (searchBtn) searchBtn.addEventListener('click', doSearch);
  if (searchInput) {
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') doSearch();
    });
  }

  // ── 5. MOBILE SEARCH TOGGLE ─────────────────────────────────
  const mobileSearchToggle = document.querySelector('.mobile-search-btn');
  const navSearch = document.querySelector('.nav-search');

  if (mobileSearchToggle && navSearch) {
    mobileSearchToggle.addEventListener('click', () => {
      navSearch.classList.toggle('mobile-open');
    });
  }

  // ── 6. LOAD FEATURED PRODUCTS ───────────────────────────────
  const featuredGrid = document.getElementById('featured-products');
  if (featuredGrid && typeof KEMO_PRODUCTS !== 'undefined') {
    const featured = getFeaturedProducts().slice(0, 6);
    featuredGrid.innerHTML = featured.map(p => renderProductCard(p)).join('');
  }

  // ── 7. LOAD FLASH PRODUCTS ──────────────────────────────────
  const flashGrid = document.getElementById('flash-products');
  if (flashGrid && typeof KEMO_PRODUCTS !== 'undefined') {
    const flash = getFlashProducts();
    flashGrid.innerHTML = flash.map(p => renderProductCard(p)).join('');
  }

  // ── 8. HERO SHOWCASE ────────────────────────────────────────
  const showcase = document.getElementById('hero-showcase');
  if (showcase && typeof KEMO_PRODUCTS !== 'undefined') {
    const showcaseProducts = KEMO_PRODUCTS.slice(0, 3);
    showcase.innerHTML = showcaseProducts.map((p, i) => `
      <a href="produit.html?id=${p.id}" class="hero-product-card${i === 0 ? ' featured' : ''} animate-on-scroll">
        ${p.discount > 0 ? `<span class="hero-badge-promo">-${p.discount}%</span>` : ''}
        <div class="hero-product-emoji">${p.emoji}</div>
        <div>
          <p class="hero-product-name">${p.name}</p>
          <p class="hero-product-price">${formatPrice(p.price)}</p>
        </div>
      </a>
    `).join('');
  }

  // ── 9. WISHLIST BUTTONS ─────────────────────────────────────
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.product-wishlist');
    if (btn && typeof KemoCart !== 'undefined') {
      e.preventDefault();
      const id = parseInt(btn.dataset.id);
      const added = KemoCart.toggleWishlist(id);
      btn.classList.toggle('active', added);
      btn.textContent = added ? '❤️' : '🤍';
    }
  });

  // ── 10. ADD TO CART BUTTONS ─────────────────────────────────
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-add-cart');
    if (btn && typeof KemoCart !== 'undefined') {
      e.preventDefault();
      const id = parseInt(btn.dataset.id);
      KemoCart.addItem(id, 1);
    }
  });

  // ── 11. SMOOTH CATEGORY NAVIGATION ──────────────────────────
  document.querySelectorAll('[data-category]').forEach(el => {
    el.addEventListener('click', (e) => {
      const cat = el.dataset.category;
      window.location.href = `catalogue.html?cat=${cat}`;
    });
  });

  // ── 12. BACK TO TOP ─────────────────────────────────────────
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ── 13. CART DRAWER TOGGLE ──────────────────────────────────
  document.querySelectorAll('.cart-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (typeof KemoCart !== 'undefined') KemoCart.openCartDrawer();
    });
  });

  document.getElementById('cart-close-btn')?.addEventListener('click', () => {
    if (typeof KemoCart !== 'undefined') KemoCart.closeCartDrawer();
  });
});

// ── PRODUCT CARD RENDERER ─────────────────────────────────────
function renderProductCard(p) {
  const badgeClass = {
    gold: 'badge-gold',
    red: 'badge-red',
    green: 'badge-green',
    rose: 'badge-rose'
  }[p.badgeColor] || 'badge-gold';

  const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));

  return `
    <article class="product-card animate-on-scroll">
      <a href="produit.html?id=${p.id}" style="text-decoration:none;color:inherit">
        <div class="product-card-media">
          <span>${p.emoji}</span>
          ${p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : ''}
          <button class="product-wishlist ${typeof KemoCart !== 'undefined' && KemoCart.isInWishlist(p.id) ? 'active' : ''}"
                  data-id="${p.id}" aria-label="Ajouter aux favoris">
            ${typeof KemoCart !== 'undefined' && KemoCart.isInWishlist(p.id) ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="product-card-body">
          <p class="product-seller">🏪 ${p.seller.name} ${p.seller.verified ? '✓' : ''}</p>
          <h3 class="product-name">${p.name}</h3>
          <div class="product-rating">
            <span class="stars">${stars}</span>
            <span class="rating-value">${p.rating}</span>
            <span class="rating-count">(${p.reviews})</span>
          </div>
          <div class="product-price-block">
            <span class="product-price">${formatPrice(p.price)}</span>
            ${p.originalPrice > p.price ? `
              <span class="product-price-orig">${formatPrice(p.originalPrice)}</span>
              <span class="product-discount">-${p.discount}%</span>
            ` : ''}
          </div>
        </div>
      </a>
      <div class="product-card-footer">
        <button class="btn-add-cart" data-id="${p.id}" aria-label="Ajouter au panier">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          Ajouter
        </button>
      </div>
    </article>
  `;
}
