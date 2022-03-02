import outsideClick from "./outsideclick.js";

export default function dropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");
  dropdownMenus.forEach((el) => {
    ["touchstart", "click"].forEach((userEvent) => {
      el.addEventListener(userEvent, handleCLick);
    });
  });

  function handleCLick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });
  }
}

// const thiagoLemos = {
//   name: "Thiago Lemos",
//   lookingFor
//   openToWork: yes,
// };
