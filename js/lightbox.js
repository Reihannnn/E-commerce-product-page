let startNum = 0;

// add quantity di product
const num = document.querySelector(".quantity-product");
const addNum = document.querySelector(".plus-btn");
const minusNum = document.querySelector(".minus-btn");

const sectionLightBox = document.querySelector("#section-lightbox");
const lightbox_content = document.querySelector(".lightbox-content");

addNum.addEventListener("click", function () {
  startNum += 1;
  num.innerHTML = `<h1 class = "quantity-product">${startNum} <h1>`;
});


minusNum.addEventListener("click", function () {
  startNum -= 1;
  num.innerHTML = `<h1 class = "quantity-product">${startNum} <h1>`;
});

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

let currentIndex = 0; // Slide yang sedang aktif
const thumbnails = document.querySelectorAll(".img-child-lightbox");
const parentImage = document.querySelector(".img-parent-lightbox");

console.log(thumbnails)
console.log(parentImage)

// Fungsi untuk membuka modal lightbox
function openModal() {
  sectionLightBox.style.display = "block";
  lightbox_content.style.display = "block";
  showSlide(currentIndex);
}

// Fungsi untuk menutup modal lightbox
function closeModal() {
  sectionLightBox.style.display = "none";
}

// Fungsi untuk navigasi slide (prev/next)
function plusSlides(n) {
  currentIndex = (currentIndex + n + thumbnails.length) % thumbnails.length;
  showSlide(currentIndex);
}

// Fungsi untuk menampilkan slide berdasarkan indeks
function currentSlide(index) {
  currentIndex = index - 1; // Sesuaikan dengan 0-based index
  showSlide(currentIndex);
}

// Fungsi untuk menampilkan slide
function showSlide(index) {
  // Update gambar utama
  parentImage.src = thumbnails[index].src.replace("-thumbnail", "");

  // Hapus status "active" dari semua thumbnail
  thumbnails.forEach((thumb) => thumb.classList.remove("active"));

  // Tambahkan status "active" pada thumbnail saat ini
  thumbnails[index].classList.add("active");
}

// Event Listener untuk thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentSlide(index + 1);
  });
});
