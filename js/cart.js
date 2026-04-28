let cart = [];

document.addEventListener('DOMContentLoaded', () => {
  // Load cart from localStorage
  const savedCart = localStorage.getItem('nasamCart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartUI();
  }

  // Add to Cart Buttons
  const addToCartBtns = document.querySelectorAll('.add-to-cart');
  addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card');
      const id = card.getAttribute('data-id');
      const title = card.querySelector('.product-title').innerText;
      const priceText = card.querySelector('.product-price').innerText;
      const price = parseInt(priceText.replace(/[^0-9]/g, ''));
      const img = card.querySelector('img').src;

      addToCart({id, title, price, img, quantity: 1});
      
      // Open drawer on add
      document.querySelector('.cart-drawer').classList.add('active');
      document.querySelector('.cart-overlay').classList.add('active');
    });
  });

  // Cart Drawer Toggles
  const cartIcon = document.querySelector('.cart-icon');
  const closeCart = document.querySelector('.close-cart');
  const cartOverlay = document.querySelector('.cart-overlay');
  
  if(cartIcon) {
    cartIcon.addEventListener('click', () => {
      document.querySelector('.cart-drawer').classList.add('active');
      cartOverlay.classList.add('active');
    });
  }

  if(closeCart) {
    closeCart.addEventListener('click', () => {
      document.querySelector('.cart-drawer').classList.remove('active');
      cartOverlay.classList.remove('active');
    });
  }

  if(cartOverlay) {
    cartOverlay.addEventListener('click', () => {
      document.querySelector('.cart-drawer').classList.remove('active');
      cartOverlay.classList.remove('active');
    });
  }

  // Checkout Button
  const checkoutBtns = document.querySelectorAll('.checkout-btn');
  checkoutBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
      }
      // Navigate to checkout based on current path
      window.location.href = window.location.pathname.includes('/pages/') ? 'checkout.html' : 'pages/checkout.html';
    });
  });
});

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push(product);
  }
  saveCart();
  updateCartUI();
}

function updateQuantity(id, change) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== id);
    }
    saveCart();
    updateCartUI();
  }
}

function saveCart() {
  localStorage.setItem('nasamCart', JSON.stringify(cart));
}

function updateCartUI() {
  const badge = document.querySelector('.cart-badge');
  const cartItemsContainer = document.querySelector('.cart-items');
  const totalAmount = document.querySelector('.total-amount');
  
  if (!badge || !cartItemsContainer || !totalAmount) return;

  // Update Badge
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;

  // Update List
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    const itemHTML = `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.title}">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">${item.price} EGP</div>
        </div>
        <div class="cart-item-actions">
          <button onclick="updateQuantity('${item.id}', -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
    `;
    cartItemsContainer.innerHTML += itemHTML;
  });

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
  }

  // Update Total
  totalAmount.textContent = `${total.toLocaleString()} EGP`;
}
