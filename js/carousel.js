document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carousel-track');
  const viewport = document.getElementById('carousel-viewport');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const dotsContainer = document.getElementById('carousel-dots');

  if (!track || !viewport || !prevBtn || !nextBtn) return;

  const root = getProductImageRoot();

  // Build product cards from PRODUCTS data
  track.innerHTML = PRODUCTS.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img-wrapper">
        <img src="${root}${p.image}" alt="${p.title}">
      </div>
      <div class="product-info">
        <h3 class="product-title">${p.title}</h3>
        <span class="product-price shimmer-text">${p.price.toLocaleString()} EGP</span>
        <button class="btn add-to-cart">Add to Cart</button>
      </div>
    </div>
  `).join('');

  // ── Carousel state ──────────────────────────────────────────────────────
  let currentIndex = 0;
  let itemsPerView = getItemsPerView();

  function getItemsPerView() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function getTotalPages() {
    return Math.max(1, PRODUCTS.length - itemsPerView + 1);
  }

  // ── Build dots ──────────────────────────────────────────────────────────
  function buildDots() {
    if (!dotsContainer) return;
    const totalPages = getTotalPages();
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('button');
      dot.className = `carousel-dot ${i === currentIndex ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  // ── Update carousel position ───────────────────────────────────────────
  function updateCarousel() {
    const cards = track.querySelectorAll('.product-card');
    if (cards.length === 0) return;

    // Calculate card width including gap
    const gap = 30;
    const viewportWidth = viewport.offsetWidth;
    const cardWidth = (viewportWidth - gap * (itemsPerView - 1)) / itemsPerView;

    const offset = currentIndex * (cardWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;

    // Update arrow states
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= PRODUCTS.length - itemsPerView;

    // Update dots
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function goTo(index) {
    const maxIndex = PRODUCTS.length - itemsPerView;
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    updateCarousel();
  }

  // ── Navigation ─────────────────────────────────────────────────────────
  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

  // ── Click to go to product detail page ─────────────────────────────────
  track.addEventListener('click', (e) => {
    // Don't navigate if clicking "Add to Cart" button
    if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
      return;
    }
    const card = e.target.closest('.product-card');
    if (card) {
      const id = card.getAttribute('data-id');
      window.location.href = `pages/product.html?id=${id}`;
    }
  });

  // ── Touch / Swipe Support ──────────────────────────────────────────────
  let startX = 0;
  let isDragging = false;

  viewport.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(currentIndex + 1);
      else goTo(currentIndex - 1);
    }
  }, { passive: true });

  // ── Keyboard Navigation ────────────────────────────────────────────────
  document.addEventListener('keydown', (e) => {
    // Only respond when the carousel section is in viewport
    const section = document.getElementById('latest-collection');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inView) return;

    if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
    if (e.key === 'ArrowRight') goTo(currentIndex + 1);
  });

  // ── Responsive Resize Handler ──────────────────────────────────────────
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newItemsPerView = getItemsPerView();
      if (newItemsPerView !== itemsPerView) {
        itemsPerView = newItemsPerView;
        currentIndex = Math.min(currentIndex, PRODUCTS.length - itemsPerView);
        buildDots();
      }
      updateCarousel();
    }, 150);
  });

  // ── Init ───────────────────────────────────────────────────────────────
  buildDots();
  updateCarousel();
});
