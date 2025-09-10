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