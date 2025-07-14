//document representa o arquivo html

console.log(document);

const imgs = document.getElementsByTagName("Img")
const cards = document.getElementsByClassName("card")
const carrossel = document.getElementById("carrossel")

console.log(imgs);
console.log(cards); 
console.log(carrossel);


const linksFooter = document.querySelectorAll("footer .nav-link")
const main = document.querySelector("main")

console.log(linksFooter);
console.log(main);

const titulo = document.querySelector(".navbar-brand");
titulo.innerHTML += " <b>Plataforma edcucacional</b>";
titulo.href = "https://www.soulcodeacademy.com";
titulo.style.color = "#336ee3";
titulo.style.fontSize = "2rem";
titulo.setAttribute("target", "_blank");

const patrocinadores = document.querySelector("#patrocinadores");

const lista = [
    "TechSolutions",
    "CodeMaster Academy",
    "InovaTech",
    "DigitalBoost",
    "CloudNinja",
    "WebDevPro",
    "StartUp Power",
    "DevTools Co.",
    "FullStack Partner",
    "NextGen Learning"
];

lista.forEach((item) => {
    patrocinadores.innerHTML += "<div class= 'card p-3'>" + item  +"</div>";
});

const semaforos = [
    "./images/semaforo-1.png",
    "./images/semaforo-2.png",
    "./images/semaforo-3.png"
]

let indice = 0;
const semaforo = document.querySelector("#semaforo");

setInterval(() => {
    if (indice == 0) {
        indice++;
        
    }
    else if (indice == 1) {
        indice++;
        

    } else {
        indice = 0;
        
    }
    semaforo.src = semaforos[indice];
}, 3000);