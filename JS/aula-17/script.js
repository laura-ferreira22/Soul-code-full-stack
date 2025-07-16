const imagemPrincipal = document.getElementById("imagem-principal");

const imagens = document.querySelectorAll(".imagens");


imagens.forEach((imagem) => {
    imagem.addEventListener("click", (evento) => {
        const imgAtual = imagemPrincipal.src;
        imagemPrincipal.src = imagem.src;
        imagem.src = imgAtual;
    }
)})





// imagens.ondblclick = () => {
//     const imgAtual = imagemPrincipal.src;
//     imagemPrincipal.src = imagem1.src;
//     imagem1.src = imgAtual;
// }
