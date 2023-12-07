//Script do primeiro modal

const createAccountBtn = document.querySelector('#create-btn');
const createAccountModal = document.querySelector('#create-account-modal');
const botoesRetorno = document.querySelectorAll('.return-btn');
const cadastrarBtn = document.querySelector('#cadastrar-btn');

createAccountBtn.addEventListener('click', () => {
  createAccountModal.showModal();
});

botoesRetorno.forEach((botao) => {
  botao.addEventListener('click', () => {
    createAccountModal.close();
    loginModal.close();
  });
});

cadastrarBtn.addEventListener('click', () => {
  createAccountModal.close();
});

// Script do segundo modal

const loginModal = document.querySelector('#login-modal');
const loginBtn = document.querySelector('#entrar-btn');
const logarBtn = document.querySelector('#logar-btn');
const criarContaLoginBtn = document.querySelector('#login-criar-conta-btn');

loginBtn.addEventListener('click', () => {
  loginModal.showModal();
});

criarContaLoginBtn.addEventListener('click', () => {
  loginModal.close();
  createAccountModal.showModal();
});

logarBtn.addEventListener('click', () => {
  loginModal.close();
});
