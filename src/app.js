function poemForm(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Here will be a poem",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", poemForm);
