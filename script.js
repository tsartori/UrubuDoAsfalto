// Botão "voltar ao topo"
let btn = document.getElementById("btnTopo");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function voltarTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Formulário
function enviarFormulario(e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
}

// Menu mobile
const menuBtn = document.getElementById("menuBtn");
const menuNav = document.getElementById("menuNav");

menuBtn.addEventListener("click", () => {
  menuNav.classList.toggle("active");
});

// LIGHTBOX
const imagens = document.querySelectorAll(".galeria img");
const lightbox = document.getElementById("lightbox");
const imgGrande = document.getElementById("img-grande");

let index = 0;

function mostrarImagem(i) {
  index = (i + imagens.length) % imagens.length;
  imgGrande.src = imagens[index].src;
}

imagens.forEach((img, i) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    mostrarImagem(i);
  });
});

document.querySelector(".fechar").onclick = () => {
  lightbox.style.display = "none";
};

document.querySelector(".esquerda").onclick = (e) => {
  e.stopPropagation();
  mostrarImagem(index - 1);
};

document.querySelector(".direita").onclick = (e) => {
  e.stopPropagation();
  mostrarImagem(index + 1);
};

document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "block") {
    if (e.key === "ArrowLeft") mostrarImagem(index - 1);
    if (e.key === "ArrowRight") mostrarImagem(index + 1);
    if (e.key === "Escape") lightbox.style.display = "none";
  }
});