const fundo = document.querySelector('body');
const imagemLampada = document.querySelector('#lampada');
const btnLigar = document.querySelector('#btnLigarDesligar');
const imgBtnLigar = document.querySelector('#btnLigarDesligar img');
const lampadas = [
    './images/lampada-acesa.png',
    './images/lampada-apagada.png'
];


let indice = 0;

btnLigar.addEventListener('click', () => {
    if (indice === 0) {
        fundo.style.backgroundColor = 'white';
        imagemLampada.src = lampadas[indice];
        imgBtnLigar.src = './images/off.png';
        indice = 1;
    }else{
        fundo.style.backgroundColor = 'black';
        imagemLampada.src = lampadas[indice];
        imgBtnLigar.src = './images/on.png';
        indice = 0;
    }
});


