const pageCheck = (pageName) => {
  const links = document.querySelectorAll('.nav-link');

  //Atribui a uma variável o caminho para a página atual
  const currentPage = window.location.pathname;

  //Faz um loop nos links selecionados e verifica qual deles bate com o nome da página passado na função (corpo do HTMl) e adiciona ou remove a classe 'active' de acordo com isso

  links.forEach((link) => {
    const paginaDoLink = link.getAttribute('data-value');

    if (pageName != paginaDoLink) {
      link.classList.remove('active');
    } else {
      link.classList.add('active');
    }
  });
};
