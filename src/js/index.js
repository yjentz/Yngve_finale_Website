console.log("Hello World!");

let img = document.querySelector("img");
let button = document.querySelector("#button");

button.addEventListener("click", () => {
  img.src = "src/assets/ich2.jpeg";
});
