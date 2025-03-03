// BOTAO DE TROCAR TEMA
let trilho = document.getElementById("trilho");
let body = document.querySelector("body");

trilho.addEventListener("click", () => {
  trilho.classList.toggle("light");
  body.classList.toggle("light");
});

// SCRIPT PARA CRIAR AS BOLHAS DE FUNDO
const numeroBolhas = 50;
const bolhas = document.querySelector(".bolhas");

for (let i = 1; i <= numeroBolhas; i++) {
  const span = document.createElement("span");

  const posX = Math.random() * 100;
  const posY = Math.random() * 100;

  span.style.left = `${posX}vw`;
  span.style.top = `${posY}vh`;

  span.style.setProperty("--i", Math.floor(Math.random() * 50) + 10);
  bolhas.appendChild(span);
}