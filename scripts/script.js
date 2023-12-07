const registerButton = document.querySelector('#create-btn');
const loginButton = document.querySelector('#create-btn');

const registerModal = document.querySelector('#register-modal');

registerButton.addEventListener('click', () => {
  registerModal.showModal();
});
