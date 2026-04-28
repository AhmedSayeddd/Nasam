document.addEventListener('DOMContentLoaded', () => {
  const savedCart = localStorage.getItem('nasamCart');
  const summaryContainer = document.querySelector('.summary-items');
  const totalAmountEl = document.querySelector('.summary-total-amount');

  if (savedCart && summaryContainer && totalAmountEl) {
    const cart = JSON.parse(savedCart);
    let total = 0;
    
    if (cart.length === 0) {
      summaryContainer.innerHTML = '<p>Your cart is empty.</p>';
      totalAmountEl.textContent = '0 EGP';
      return;
    }

    summaryContainer.innerHTML = '';
    cart.forEach(item => {
      total += item.price * item.quantity;
      
      // Fix image path for checkout page (it's inside pages/, so relative paths from items might need adjustment depending on how they were added, but typically we added them as images/... from root or ../images/... from pages. Since cart state is global, we need to handle pathing carefully. Assuming the cart saves the literal absolute/relative src string, we'll try to ensure it works, but a robust way is to just display it).
      let imgSrc = item.img;
      // If the image src starts with images/ (added from index.html) and we are in pages/
      if (imgSrc.includes('images/') && !imgSrc.includes('../images/')) {
          // It's likely an absolute URL depending on how it was read, but let's just use the raw src.
      }
      
      summaryContainer.innerHTML += `
        <div class="summary-item">
          <img src="${imgSrc}" alt="${item.title}" class="summary-img">
          <div class="summary-details">
            <div class="summary-title">${item.title} (x${item.quantity})</div>
            <div class="summary-price">${(item.price * item.quantity).toLocaleString()} EGP</div>
          </div>
        </div>
      `;
    });

    // Add shipping cost (fixed 50 EGP)
    const shipping = 50;
    summaryContainer.innerHTML += `
      <div class="summary-item">
        <div class="summary-details" style="margin-left: 0;">
          <div class="summary-title">Shipping</div>
          <div class="summary-price">${shipping} EGP</div>
        </div>
      </div>
    `;

    totalAmountEl.textContent = `${(total + shipping).toLocaleString()} EGP`;
  }

  // Payment method selection styling
  const paymentMethods = document.querySelectorAll('.payment-method');
  paymentMethods.forEach(method => {
    method.addEventListener('click', () => {
      paymentMethods.forEach(m => m.classList.remove('active'));
      method.classList.add('active');
      method.querySelector('input').checked = true;
    });
  });

  // Handle form submission
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const cartData = JSON.parse(localStorage.getItem('nasamCart') || '[]');
      if (cartData.length === 0) {
        alert("Your cart is empty!");
        return;
      }

      // Simulate order processing
      const btn = checkoutForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Processing...';
      btn.disabled = true;
      
      setTimeout(() => {
        alert("Order placed successfully! Thank you for shopping with NASAM.");
        localStorage.removeItem('nasamCart');
        window.location.href = '../index.html';
      }, 2000);
    });
  }
});
