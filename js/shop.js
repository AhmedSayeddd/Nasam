document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.shop-grid .product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active to clicked
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          // Trigger brief animation
          card.style.animation = 'none';
          card.offsetHeight; /* trigger reflow */
          card.style.animation = 'fadeUp 0.5s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ── Click product card to view details ────────────────────────────────
  productCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      // Don't navigate if clicking "Add to Cart" button
      if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
        return;
      }
      const id = card.getAttribute('data-id');
      if (id) {
        window.location.href = `product.html?id=${id}`;
      }
    });
  });
});
