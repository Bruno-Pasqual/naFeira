const trocaBotao = () => {
  const botoes = document.querySelectorAll('.nav-icon');
  botoes.forEach((botao) => {
    botao.addEventListener('click', (e) => {
      botoes.forEach((element) => {
        element.classList.remove('ativo');
      });

      e.target.classList.add('ativo');
    });
  });
};

export default trocaBotao;
