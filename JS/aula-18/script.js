function preencherNaTela(dados){
    cidades.innerHTML= '';
    for (let item of dados) {
        cidades.innerHTML += `<li>${item.nome}</li>`;
    }
}

const cidades = document.querySelector("#cidades")
const urlCidades = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/SP/municipios'

async function buscarDadosIBGE(){
    try {
        cidades.innerHTML = "<div class= 'spinner-border'></div>" // carregando
        const resposta = await fetch(urlCidades);  
        const dados = await resposta.json(); // para funçoes q retornam uma promessa
        preencherNaTela(dados);        
    } catch(erro) {
        console.error(erro);
        cidades.innerHTML = 'Houve um erro!';
    }
}

buscarDadosIBGE();

// const promessa = fetch(urlCidades); // faz uma solicitação HTTP para a URL especificada


// console.log(promessa); // exibe a promessa no console

// promessa.then((resposta) =>{ // quando a promessa for resolvida, executa a função
//     const promessa = resposta.json();

//     promessa.then((dados)=>{
//         preencherNaTela(dados);
//     })
// }).catch((erro)=>{
//     console.error(erro);
//     cidades.innerHTML = 'Houve um erro';
// });


