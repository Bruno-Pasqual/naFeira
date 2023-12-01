function fazerCadastro(){
    let nome = document.querySelector("#inputnome").value;
    
    let senha = document.querySelector("#inputsenha").value;

    let endereco = document.querySelector("#inputendereco").value;

    let email = document.querySelector("#inputemail").value;

    let confirmar = document.querySelector("#inputconfirmar").value;

    let telefone = document.querySelector("#inputtelefone").value;

    console.log(`Nome: ${nome}
Senha: ${senha}
Endereço: ${endereco}
Email: ${email}
Senha Confirmada: ${confirmar}
Telefone: ${telefone}`);
}
