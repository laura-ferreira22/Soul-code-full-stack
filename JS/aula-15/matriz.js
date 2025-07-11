const cidades = [  // lista melhor usar const
    "São Paulo",
    "Rio de Janeiro",
    "Belo Horizonte",
];

console.log(cidades);

cidades[2]= "Recife"; // pode alterar o valor de um item

console.log(cidades);

const nuncaFacaIsso = ["Fulano",12, true, [1, 2, 3]]; // array heterogêneo não é recomendado
console.log(nuncaFacaIsso);

// o ideal seria um array de objetos
const pessoas = [
    { nome: "Fulano", 
      idade: 12, 
      ativo: true 
    },
    { nome: "Ciclano",
      idade: 25, 
      ativo: false 
    },
    { nome: "Beltrano", 
      idade: 30, 
      ativo: true },
];


// raiz bidimensional
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[2][1]); // 8

//Método == Função associada a um objeto ou classe

const alunos = ['João', 'Maria', 'Pedro'];
console.log(alunos.length); // 3 - propriedade do objeto array
console.log(alunos[alunos.length - 1]); // Pedro - acessando o último elemento

alunos.push('Ana'); // adiciona um novo elemento ao final do array
console.log(alunos); // ['João', 'Maria', 'Pedro', 'Ana']

alunos.pop(); // remove o último elemento do array
console.log(alunos); // ['João', 'Maria', 'Pedro']

let nome = "JavaScript";
console.log(nome[4]); // 'S' - acessando o caractere na posição 4 (boxing)
console.log(nome.replace("Java", "Type")); // substitui "Java" por "Type"

alunos.forEach((aluno, index) => {
    console.log(`Aluno ${index + 1}: ${aluno}`);
}); // itera sobre o array e exibe cada aluno com seu índice

const novosAlunos = alunos.map(aluno => { //cria um novo array com os nomes dos alunos
    return aluno + " Silva"; // adiciona " Silva" a cada nome
});

console.log(novosAlunos); // ['João Silva', 'Maria Silva', 'Pedro Silva']

const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map(numero => numero * 2); // dobra cada número 
console.log(numerosDobrados); // [2, 4, 6, 8, 10]


const filtro = numeros.filter((n) => n % 2 == 1)
console.log(filtro);

const quadrados = filtro.map((n) => n**2);
console.log(quadrados);

const elemento = numeros.find((n) => n > 6);
console.log(elemento);

const todos = numeros.filter(() => true);

console.log(alunos);

const presente = alunos.includes("Emily");

console.log(presente ? "SIM" : "NÃO");

const frutas = ["Banana", "Morango", "Abacaxi"];
console.log(frutas)
console.log(frutas.sort());

const nums = [10, 7, 4, 12, 6];
console.log(nums.sort()); // 4  6 7 10 12

frutas.forEach((fr) => {
    console.log("Vou comer " + fr)
})

for (let i = 0; i < frutas.length; i++) {
    console.log("Vou comer " + frutas[i]);
}

for (let fruta of frutas) {
    console.log("Vou comer " + fruta);
}