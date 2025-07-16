const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

const resultado = document.querySelector('#resultado');

const btnSomar = document.querySelector('#btnSomar');


btnSomar.addEventListener('click', () => {
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    const soma = n1 + n2;
    
   if (Number.isNaN(soma)) {
     resultado.innerHTML = "Por favor, insira números válidos.";
   } else {
     resultado.innerHTML = `Resultado: ${soma}`;
   }
   resultado.classList.remove("d-none"); // acessa e modifica a class de resultado
})
