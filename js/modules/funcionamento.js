export default function initFuncionamento() {}

const funcionamento = document.querySelector("[data-semana]");
const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);
const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

if (
  (diaAgora >= diasSemana[0]) &
  (diaAgora <= diasSemana[diasSemana.length - 1]) &
  (horarioAgora >= horarioSemana[0]) &
  (horarioAgora < horarioSemana[horarioSemana.length - 1])
) {
  console.log("ok");
  funcionamento.classList.add("aberto");
}

// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000);
// }
