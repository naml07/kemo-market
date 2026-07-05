// ============================================================
// KEMO MARKET — Cart Manager (localStorage)
// ============================================================

const KemoCart = (() => {
  const CART_KEY = 'kemo_cart';
  const WISHLIST_KEY = 'kemo_wishlist';

  // ── Getters ─────────────────────────────────────────────────
  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
    catch { return []; }
  }

  function getWishlist() {
    try { return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []; }
    catch { return []; }
  }

  function saveCart(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    updateCartUI();
  }

  function saveWishlist(items) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
  }

  // ── Cart Operations ─────────────────────────────────────────
  function addItem(productId, qty = 1) {
    const product = getProductById(productId);
    if (!product) return;

    const cart = getCart();
    const existing = cart.find(i => i.id === productId);

    if (existing) {
      existing.qty = Math.min(existing.qty + qty, product.stock);
    } else {
      cart.push({ id: productId, qty, addedAt: Date.now() });
    }

    saveCart(cart);
    showCartNotification(product.name);
    openCartDrawer();
  }

  function removeItem(productId) {
    const cart = getCart().filter(i => i.id !== productId);
    saveCart(cart);
  }

  function updateQty(productId, qty) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
      if (qty <= 0) { removeItem(productId); return; }
      item.qty = qty;
      saveCart(cart);
    }
  }

  function clearCart() {
    localStorage.removeItem(CART_KEY);
    updateCartUI();
  }

  function getCount() {
    return getCart().reduce((sum, i) => sum + i.qty, 0);
  }

  function getTotal() {
    return getCart().reduce((sum, i) => {
      const p = getProductById(i.id);
      return p ? sum + (p.price * i.qty) : sum;
    }, 0);
  }

  function getCartItems() {
    return getCart().map(i => ({
      ...i,
      product: getProductById(i.id)
    })).filter(i => i.product);
  }

  // ── Wishlist Operations ──────────────────────────────────────
  function toggleWishlist(productId) {
    const list = getWishlist();
    const idx = list.indexOf(productId);
    if (idx > -1) {
      list.splice(idx, 1);
    } else {
      list.push(productId);
    }
    saveWishlist(list);
    return idx === -1; // returns true if added
  }

  function isInWishlist(productId) {
    return getWishlist().includes(productId);
  }

  // ── UI Updates ───────────────────────────────────────────────
  function updateCartUI() {
    const count = getCount();
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
    renderCartDrawer();
  }

  function renderCartDrawer() {
    const drawer = document.getElementById('cart-drawer-items');
    const totalEl = document.getElementById('cart-total');
    const emptyEl = document.getElementById('cart-empty');
    const footerEl = document.getElementById('cart-footer');

    if (!drawer) return;

    const items = getCartItems();

    if (items.length === 0) {
      drawer.innerHTML = '';
      if (emptyEl) emptyEl.style.display = 'flex';
      if (footerEl) footerEl.style.display = 'none';
      return;
    }

    if (emptyEl) emptyEl.style.display = 'none';
    if (footerEl) footerEl.style.display = 'block';

    drawer.innerHTML = items.map(item => {
      const p = item.product;
      return `
        <div class="cart-item" data-id="${p.id}">
          <div class="cart-item-emoji">${p.emoji}</div>
          <div class="cart-item-info">
            <p class="cart-item-name">${p.name}</p>
            <p class="cart-item-price">${formatPrice(p.price)}</p>
            <div class="cart-item-qty">
              <button class="qty-btn" onclick="KemoCart.updateQty(${p.id}, ${item.qty - 1})">−</button>
              <span>${item.qty}</span>
              <button class="qty-btn" onclick="KemoCart.updateQty(${p.id}, ${item.qty + 1})">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="KemoCart.removeItem(${p.id})" aria-label="Supprimer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>`;
    }).join('');

    if (totalEl) totalEl.textContent = formatPrice(getTotal());
  }

  function showCartNotification(productName) {
    const notif = document.createElement('div');
    notif.className = 'cart-notif';
    notif.innerHTML = `<span>✓</span> <strong>${productName}</strong> ajouté au panier`;
    document.body.appendChild(notif);
    setTimeout(() => notif.classList.add('show'), 10);
    setTimeout(() => {
      notif.classList.remove('show');
      setTimeout(() => notif.remove(), 300);
    }, 2500);
  }

  function openCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  // Init
  document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    const overlay = document.getElementById('cart-overlay');
    if (overlay) overlay.addEventListener('click', closeCartDrawer);
  });

  return {
    addItem, removeItem, updateQty, clearCart,
    getCount, getTotal, getCartItems, getCart,
    toggleWishlist, isInWishlist,
    openCartDrawer, closeCartDrawer, updateCartUI
  };
})();
