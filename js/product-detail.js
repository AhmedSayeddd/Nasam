document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = getProductById(productId);

  if (!product) {
    document.getElementById('product-detail').innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 100px 0;">
        <h2 class="brand-font" style="font-size: 3rem; margin-bottom: 20px;">Product Not Found</h2>
        <p style="color: #888; margin-bottom: 30px;">The product you're looking for doesn't exist or has been removed.</p>
        <a href="shop.html" class="btn">Back to Shop</a>
      </div>`;
    document.getElementById('related-section').style.display = 'none';
    return;
  }

  const root = getProductImageRoot();

  // Update page title & breadcrumb
  document.title = `${product.title} | NASAM`;
  document.getElementById('breadcrumb-product').textContent = product.title;

  // Render stars helper
  function renderStars(rating, className = '') {
    let html = '';
    for (let i = 1; i <= 5; i++) {
      html += `<span class="star ${className} ${i <= Math.round(rating) ? '' : 'empty'}">★</span>`;
    }
    return html;
  }

  // Category label
  const categoryLabels = { tshirts: 'T-Shirts', pants: 'Pants', jackets: 'Jackets' };

  // Build detail HTML
  const detailHTML = `
    <div class="product-detail-image">
      <img src="${root}${product.image}" alt="${product.title}">
    </div>
    <div class="product-detail-info">
      <span class="product-detail-category">${categoryLabels[product.category] || product.category}</span>
      <h1 class="product-detail-title">${product.title}</h1>

      <div class="product-detail-rating">
        <div class="stars">${renderStars(product.rating)}</div>
        <span class="rating-text"><strong>${product.rating}</strong> / 5 &nbsp;·&nbsp; ${product.reviewCount} Reviews</span>
      </div>

      <div class="product-detail-price">
        ${product.price.toLocaleString()} <span class="currency">EGP</span>
      </div>

      <div class="detail-divider"></div>

      <p class="product-detail-desc">${product.description}</p>

      <!-- Size Selector -->
      <div class="size-selector">
        <span class="size-selector-label">Select Size</span>
        <div class="size-options">
          ${product.sizes.map((s, i) => `<button class="size-btn ${i === 0 ? 'active' : ''}" data-size="${s}">${s}</button>`).join('')}
        </div>
      </div>

      <!-- Add to Cart -->
      <div class="product-actions">
        <button class="btn-add-to-cart-detail" id="detail-add-to-cart" data-id="${product.id}">
          Add to Cart
        </button>
      </div>

      <div class="detail-divider"></div>

      <!-- Accordion -->
      <div class="detail-accordion">
        <div class="accordion-item open">
          <div class="accordion-header">
            <h4>Material & Fabric</h4>
            <span class="accordion-icon">+</span>
          </div>
          <div class="accordion-content">
            <p>${product.material}</p>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <h4>Care Instructions</h4>
            <span class="accordion-icon">+</span>
          </div>
          <div class="accordion-content">
            <p>${product.care}</p>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <h4>Customer Reviews (${product.reviewCount})</h4>
            <span class="accordion-icon">+</span>
          </div>
          <div class="accordion-content">
            <div class="reviews-list">
              ${product.reviews.map(r => `
                <div class="review-card">
                  <div class="review-header">
                    <span class="review-author">${r.author}</span>
                    <span class="review-date">${new Date(r.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div class="review-stars">${renderStars(r.rating)}</div>
                  <p class="review-text">${r.text}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('product-detail').innerHTML = detailHTML;

  // ── Size selector logic ─────────────────────────────────────────────────
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // ── Accordion logic ─────────────────────────────────────────────────────
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('open');
    });
  });

  // ── Add to Cart from detail page ────────────────────────────────────────
  document.getElementById('detail-add-to-cart').addEventListener('click', () => {
    const selectedSize = document.querySelector('.size-btn.active');
    const size = selectedSize ? selectedSize.dataset.size : product.sizes[0];

    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      img: root + product.image,
      quantity: 1,
      size: size
    });

    document.querySelector('.cart-drawer').classList.add('active');
    document.querySelector('.cart-overlay').classList.add('active');
  });

  // ── Related Products ────────────────────────────────────────────────────
  const related = PRODUCTS.filter(p => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const relatedGrid = document.getElementById('related-grid');
  relatedGrid.innerHTML = related.map(p => `
    <div class="product-card" data-id="${p.id}" onclick="window.location.href='product.html?id=${p.id}'">
      <div class="product-img-wrapper">
        <img src="${root}${p.image}" alt="${p.title}">
      </div>
      <div class="product-info">
        <h3 class="product-title">${p.title}</h3>
        <span class="product-price shimmer-text">${p.price.toLocaleString()} EGP</span>
      </div>
    </div>
  `).join('');
});
