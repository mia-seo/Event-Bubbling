const ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    alert(e.target.innerText);
  }
});
