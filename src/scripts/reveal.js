window.revelar = ScrollReveal({
  reset: true,
});

// APRESENTACAO
revelar.reveal(".apresentacao-div-nome", {
  duration: 1000,
  distance: "100px",
});

revelar.reveal(".apresentacao-div-texto", {
  duration: 1000,
  distance: "100px",
});

revelar.reveal(".apresentacao-links", {
  duration: 1000,
  distance: "100px",
  delay: 250,
  easing: "ease",
});

// SOBRE
revelar.reveal(".sobre-imagem", {
  duration: 1000,
  distance: "70px",
  origin: "left",
  easing: "ease-in-out",
  reset: false,
});

revelar.reveal(".sobre-div-texto", {
  duration: 1000,
  distance: "70px",
  origin: "right",
  easing: "ease-in-out",
  reset: false,
});

// HABILIDADES
revelar.reveal(".habilidades-frontend", {
  duration: 1000,
  distance: "90px",
  easing: "ease-out",
  delay: 100,
  reset: false,
});

revelar.reveal(".habilidades-backend", {
  duration: 1000,
  distance: "90px",
  easing: "ease-out",
  delay: 100,
  reset: false,
});

revelar.reveal(".habilidades-frameworks", {
  duration: 1000,
  distance: "90px",
  easing: "ease-out",
  delay: 100,
  reset: false,
});

// PROJETOS
revelar.reveal(".efeito-projeto1", {
  duration: 1000,
  distance: "70px",
  delay: 100,
  origin: "right",
  easing: "ease-out",
  reset: false,
});

revelar.reveal(".efeito-projeto2", {
  duration: 1000,
  distance: "70px",
  delay: 100,
  origin: "right",
  easing: "ease-out",
  reset: false,
});

revelar.reveal(".efeito-projeto3", {
  duration: 1000,
  distance: "70px",
  delay: 100,
  origin: "right",
  easing: "ease-out",
  reset: false,
});

// CONTATO
revelar.reveal(".contato-form", {
  duration: 1000,
  distance: "90px",
  delay: 100,
  origin: "top",
  easing: "ease-out",
  reset: false,
});
