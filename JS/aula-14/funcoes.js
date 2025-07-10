function cumprimentar(nome, sobrenome) {
    console.log("Oi! " + nome + " " + sobrenome);
}

cumprimentar("João", "Gomes");
cumprimentar("Ana", "Castela");
cumprimentar("José", "Neto");
cumprimentar("Maria", "Betânia");
cumprimentar("Cristiano", "Araújo");

console.log(typeof cumprimentar);

// Função sem parâmetros e sem retorno.
// Função com parâmetros e sem retorno.
// Função sem parâmetros e com retorno.
// Função com parâmetros e com retorno.

// Função com parâmetros e com retorno.
function calcularAreaRetangulo(base, altura) {
    let area = base * altura;
    return area;
}

let area = calcularAreaRetangulo(4, 5);
console.log(area);

// Função sem parâmetros e com retorno.
function buscarTodosProdutos() {
    // consultador no banco de dados
    let produtos = ['produto 1', 'produto 2'];
    return produtos;
}

let produtos = buscarTodosProdutos();
console.log(produtos);


