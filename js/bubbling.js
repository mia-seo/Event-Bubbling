const products = document.querySelector(".products");

const imgs = [
  "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1554577621-1a3def0b656c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1529136490842-e2da7a4c7b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=642&q=80",
];

const paintImg = (src) => {
  const img = document.createElement("div");
  img.style.backgroundImage = `url(${src})`;
  img.className = "img";
  img.addEventListener("click", () => {
    alert("상품 상세페이지로 이동합니다!");
  });
  const cart = document.createElement("i");
  cart.className = "cart fa-solid fa-cart-shopping";
  cart.addEventListener("click", (event) => {
    event.stopPropagation();
    alert("장바구니로 이동합니다!");
  });
  img.appendChild(cart);
  products.appendChild(img);
};

imgs.forEach((img) => paintImg(img));
