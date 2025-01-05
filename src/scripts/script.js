// BOTAO DE TROCAR TEMA
let trilho = document.getElementById('trilho');
let body = document.querySelector('body');

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('light');
    body.classList.toggle('light');
});

// CÓDIGO PARA CRIAR BOLHAS ALEATÓRIAS
const numeroBolhas = 45;
const bolhas = document.querySelector('.bolhas');

for(let i = 1; i <= numeroBolhas*10; i++) {
    const span = document.createElement('span');
    span.style.setProperty('--i', Math.floor(Math.random() * 50) + 10);
    bolhas.appendChild(span);
}