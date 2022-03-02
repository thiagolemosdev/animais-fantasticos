export default function initAccordionList() {
  const dts = document.querySelectorAll("dt");
  dts[0].classList.add("ativo");
  dts[0].nextElementSibling.classList.add("ativo");

  dts.forEach((dt) => {
    dt.addEventListener("click", () => {
      const dd = dt.nextElementSibling;
      dd.classList.toggle("ativo");
      dt.classList.toggle("ativo");
    });
  });
}
