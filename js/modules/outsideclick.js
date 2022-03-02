export default function outsideClick(el, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!el.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      }, 1000);
    });

    el.setAttribute(outside, "");
    function handleOutsideClick(event) {
      if (!el.contains(event.target)) {
        el.removeAttribute(outside);
        events.forEach((event) => {
          html.removeEventListener("click", handleOutsideClick);
        });
        callback();
      }
    }
  }
}
