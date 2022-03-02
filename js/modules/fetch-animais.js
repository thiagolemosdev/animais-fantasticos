import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numeroGrid = document.querySelector(".numeros-grid");
      animaisJSON.forEach((el) => {
        const divAnimal = createAnimal(el);
        numeroGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log("Error FetchAnimais");
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total} `;
    return div;
  }

  fetchAnimais("./animaisapi.json");
}
