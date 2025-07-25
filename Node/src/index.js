import "dotenv/config";
import express from "express";
import produtosRouter from "./routers/produtosRouter.js";
import usuarioRouter from "./routers/usuarioRouter.js";

const server = express();
server.use(express.json());// todas as requisições feitas no servidor ele converte p JSON

const port = process.env.PORT || 3000;

server.use(produtosRouter); // permite acoplar a rota ao servidor
server.use(usuarioRouter);

server.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`);
    console.log(`Acesse em: http://localhost:${port}`);
});


//o arquivo index serve para criar o servidor e receber as rotas criadas no router
// HTTP 
// GET (Buscar)
// POST (Salvar)
// PUT (Editar)
// DELETE (Apagar)