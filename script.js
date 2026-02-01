let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  document.getElementById("cartCount").innerText = cart.length;
  updateCart();
}

function updateCart() {
  const items = document.getElementById("cartItems");
  items.innerHTML = "";
  cart.forEach(p => {
    const div = document.createElement("div");
    div.textContent = `${p.name} - ₹${p.price}`;
    items.appendChild(div);
  });
  document.getElementById("total").innerText = total;
}

function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("open");
}

function orderWhatsApp() {
  let msg = "Order from URES:%0A";
  cart.forEach(p => msg += `${p.name} - ₹${p.price}%0A`);
  msg += `Total: ₹${total}`;

  window.open(
    "https://wa.me/7902408917?text=" + msg,
    "_blank"
  );
}
