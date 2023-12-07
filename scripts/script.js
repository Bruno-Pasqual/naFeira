const createAccountBtn = document.querySelector('#create-btn');
const createAccountModal = document.querySelector('#create-account-modal');
const botaoVoltarCreateAccount = document.querySelector('#voltar-btn-create');
const cadastrarBtn = document.querySelector('#cadastrar-btn');

createAccountBtn.addEventListener('click', () => {
  createAccountModal.showModal();
});

botaoVoltarCreateAccount.addEventListener('click', () => {
  createAccountModal.close();
});

cadastrarBtn.addEventListener('click', () => {
  createAccountModal.close();
});
