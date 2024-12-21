const carts = document.querySelector(".cart")
// const closeCart = document.querySelector(".close-cart")
// const buttonCart = document.querySelector(".cart-logo")

function openCart(){
  carts.style.display ="block"
}

function closeCart(){
  carts.style.display ="none"
}


// Variabel untuk menyimpan data keranjang
const cart = [];

// Fungsi untuk menambah item ke keranjang
function addToCart(product, price, quantity, image) {
  const existingItem = cart.find((item) => item.product === product); // memeriksa apakah nama dari sebuah product udah ada ?

  if (existingItem) {
    // Jika item sudah ada di keranjang, perbarui quantity
    existingItem.quantity += quantity;
    existingItem.totalPrice = existingItem.quantity * price;
    console.log(existingItem);
  } else {
    // Jika item belum ada, tambahkan ke keranjang
    cart.push({
      product,
      price,
      image,
      quantity,
      totalPrice: price * quantity,
    });

    console.log(product);
    console.log(cart);
  }

  // Perbarui tampilan keranjang
  updateCartUI();
}

// Fungsi untuk menghapus item dari keranjang
function removeFromCart(product) {
  const itemIndex = cart.findIndex((item) => item.product === product);
  const questation = confirm("apakah anda ingin menghpus ini");
  if (questation) {
    if (itemIndex !== -1) {
      cart.splice(itemIndex, 1);
      updateCartUI();
    }
  } else {
    updateCartUI();
  }

  // Perbarui tampilan keranjang
}

// Fungsi untuk memperbarui UI keranjang
function updateCartUI() {
  const cartContainer = document.querySelector(".cart-product");
  const totalPriceInCart = document.querySelector(".total-price");
  let price = 0;
  if (cart.length > 0) {
    cart.map((product) => (price += product.totalPrice));
  }
  // Bersihkan isi keranjang
  totalPriceInCart.innerHTML = `<p>TOTAL PRICE : <b>$${price}</b></p>`;
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";

    return;
  }

  // Tambahkan item dari keranjang ke UI
  cart.forEach((item) => {
    const productHTML = `
    <div class = 'cart-isiProduct'>
    <img src =${item.image} alt="" class="img-in-cart" />
    <div class="cart-desc">
    <p class="product-cart-list">${item.product}</p>
    <p class="product-cart-list-price">${item.price} x ${
      item.quantity
    } <b>$${item.totalPrice.toFixed(2)}</b></p>
    </div>
    <ion-icon name="trash-outline" class="trash-icon" onclick="removeFromCart('${
      item.product
    }')"></ion-icon>
    </div>
    `;

    cartContainer.innerHTML += productHTML;
  });
}

// Event Listener untuk tombol Add to Cart
document.querySelector(".addToCart").addEventListener("click", () => {
  const product = "Sneakers v1";
  const price = 125.0;
  const image = "/images/image-product-1-thumbnail.jpg";
  const quantity = parseInt(
    document.querySelector(".quantity-product").textContent.trim()
  );

  if (quantity > 0) {
    alert(`${product} succes ditambahkan ke keranjang`);
    addToCart(product, price, quantity, image);
  } else {
    alert("Please select a quantity greater than 0.");
  }
});

// Event Listener untuk tombol + dan -
document.querySelector(".plus-btn").addEventListener("click", () => {
  const quantityElement = document.querySelector(".quantity-product");
  quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
});

document.querySelector(".minus-btn").addEventListener("click", () => {
  const quantityElement = document.querySelector(".quantity-product");
  const currentQuantity = parseInt(quantityElement.textContent);
  if (currentQuantity > 0) {
    quantityElement.textContent = currentQuantity - 1;
  }
});

if (cart.length === 0) {
  const cartContainer = document.querySelector(".cart-product");
  const cartTotalContainer = document.querySelector(".button-cart");
  cartContainer.innerHTML = "<p>Your cart is empty.</p>";
}
