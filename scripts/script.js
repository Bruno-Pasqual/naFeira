//modal 1
const createAccountBtn = document.querySelector('#create-btn');
const createAccountModal = document.querySelector('#create-account-modal');
const botoesRetorno = document.querySelectorAll('.return-btn');
const cadastrarBtn = document.querySelector('#cadastrar-btn');

// modal 2

const loginModal = document.querySelector('#login-modal');
const loginBtn = document.querySelector('#entrar-btn');
const logarBtn = document.querySelector('#logar-btn');
const criarContaLoginBtn = document.querySelector('#login-criar-conta-btn');

const mobileModal = document.querySelector('#mobile-buttons-modal');
const userButton = document.querySelector('#user-icon');
const loginMobileBtn = document.querySelector('#mobile-login-btn');
const createAccountMobileBtn = document.querySelector(
  '#createAccount-mobile-btn'
);

// Script modal mobile

userButton.addEventListener('click', () => {
  mobileModal.showModal();
});

createAccountMobileBtn.addEventListener('click', () => {
  mobileModal.close();
  createAccountModal.showModal();
});

loginMobileBtn.addEventListener('click', () => {
  mobileModal.close();
  loginModal.showModal();
});

//script primeiro modal

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
