const botao = document.querySelector('.toogle');
const descricoes = document.querySelector('.descricao');
const cards = document.querySelectorAll('.pack-card');
const body = document.getElementById('body');

botao.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    descricoes.forEach(desc => desc.classList.toggle('dark-mode-card'));
    cards.forEach(card => card.classList.toggle('dark-mode-card'));
});