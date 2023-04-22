const openBtn = document.querySelector(".openBtn");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modalContent");
const closeBtn = document.querySelector(".closeBtn");

const HIDDEN_CLASSNAME = "hidden";

const openModal = () => {
  modal.classList.remove(HIDDEN_CLASSNAME);
};

const closeModal = () => {
  modal.classList.add(HIDDEN_CLASSNAME);
};

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);
modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});
