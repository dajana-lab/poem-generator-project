function workPoem(response) {
  console.log("generated poem");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function poemForm(event) {
  event.preventDefault();

  let clientInput = document.querySelector("#client-poem");
  let apiKey = "7adbfd2oe230496b6bf0deac7aetb83f";
  let prompt = `Generate a Poem about ${clientInput.value}`;
  let context =
    "You are a excellent Poem expert and you like to write a short poem, with nice and polite words. Make sure to generate a 5 line poem in HTML and follow the client poem. Make sure to separate each line with a <br />. Do NOT make a huge line height, just clear and simple. Everytime add the title for every Poem";
  apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(workPoem);
}
let formElement = document.querySelector("#poem-generator-form");
formElement.addEventListener("submit", poemForm);
