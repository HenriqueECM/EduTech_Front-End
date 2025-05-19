const botao = document.querySelector('.toogle');
const descricoes = document.querySelector('.descricao');
const cards = document.querySelectorAll('.pack-card');
const body = document.getElementById('body');

const toggleBtn = document.querySelector('.toogle');

// Função para alternar a classe de dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Aplica o tema escuro nos cards de cursos
  const descricaoCards = document.querySelectorAll('.descricao');
  descricaoCards.forEach(card => {
    card.classList.toggle('dark-mode-card');
  });

  // Aplica tema escuro nos inputs e selects
  const inputs = document.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.classList.toggle('dark-input');
  });

  // Aplica tema escuro nos elementos de formulário
  const formSection = document.querySelector('.formulario-matricula');
  if (formSection) {
    formSection.classList.toggle('dark-mode-card');
  }
}

// Adiciona o evento de clique no botão de alternância
toggleBtn.addEventListener('click', toggleDarkMode);