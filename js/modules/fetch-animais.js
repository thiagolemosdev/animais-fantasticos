import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();
    const numeroGrid = document.querySelector(".numeros-grid");
    animaisJSON.forEach((el) => {
      const divAnimal = createAnimal(el);
      numeroGrid.appendChild(divAnimal);
    });
    initAnimaNumeros();
  }

  function createAnimal(animal) {
    console.log(animal);
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total} `;
    return div;
  }

  fetchAnimais("./animaisapi.json");
}
