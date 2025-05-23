const toggleBtn = document.querySelector('.toogle');

// Função para alternar o tema escuro
function toggleDarkMode() {
  // Alterna classe de tema escuro no body do documento
  document.body.classList.toggle('dark-mode');

  // Alterna classe de tema escuro nos elementos com classe .descricao
  document.querySelectorAll('.descricao').forEach(card => {
    card.classList.toggle('dark-mode-card');
  });

  // Alterna tema escuro nos campos de formulário
  document.querySelectorAll('input, select, textarea').forEach(input => {
    input.classList.toggle('dark-input');
  });

  // Alterna tema escuro na seção de formulário se existir
  const formSection = document.querySelector('.formulario-matricula');
  if (formSection) {
    formSection.classList.toggle('dark-mode-card');
  }
}

/* Adiciona o evento de clique no botão de alternância
  de tema claro/escuro e chama a função de tema escuro */
toggleBtn.addEventListener('click', toggleDarkMode);