export default function abreFechaModal() {
  const abir = document.querySelector("[data-modal='abrir']");
  const fechar = document.querySelector(".fechar");
  const containerModal = document.querySelector(".modal-container");

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function clickForaModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  abir.addEventListener("click", toggleModal);
  fechar.addEventListener("click", toggleModal);
  containerModal.addEventListener("click", clickForaModal);
}
