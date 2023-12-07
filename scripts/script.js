const createBtn = document.querySelector('#create-btn');
const entrarBtn = document.querySelector('#entrar-btn');

const createModal = document.querySelector('#create-modal');

createBtn.addEventListener('click', () => {
  createModal.showModal();
});
