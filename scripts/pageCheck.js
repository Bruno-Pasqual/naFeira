const pageCheck = () => {
  //Fazendo a seleção de todos os links da barra de navegação do site 'nav'
  const links = document.querySelectorAll('.nav-link');

  //Atribui a uma variável o caminho para a página atual
  const currentPage = window.location.pathname;

  //Faz um loop nos links selecionados e verifica qual deles bate com o nome da página passado na função (corpo do HTMl) e adiciona ou remove a classe 'active' de acordo com isso

  links.forEach((link) => {
    //acessa o link e faz a atribuição do valor em 'data-value' para uma variável que será utilizada abaixo.

    const paginaDoLink = link.getAttribute('data-value');

    if (currentPage.includes(paginaDoLink)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};
