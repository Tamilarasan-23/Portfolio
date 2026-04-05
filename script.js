const mouseGlow = document.getElementById("mouseGlow");
const modal = document.getElementById("certificateModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalClose = document.getElementById("modalClose");
const certificateCards = document.querySelectorAll(".certificate-card");

window.addEventListener("pointermove", (event) => {
  mouseGlow.style.left = `${event.clientX}px`;
  mouseGlow.style.top = `${event.clientY}px`;
});

const openModal = (card) => {
  modalImage.src = card.dataset.image;
  modalImage.alt = `${card.dataset.title} preview`;
  modalTitle.textContent = card.dataset.title;
  modalDescription.textContent = card.dataset.description;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

certificateCards.forEach((card) => {
  card.addEventListener("click", () => openModal(card));
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target.dataset.close === "true") {
    closeModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});
