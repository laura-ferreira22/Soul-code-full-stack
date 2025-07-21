import express from "express";

const server = express();
server.use(express.json());

const port = 3000;
const produtos = [
    {
        nome: "Smart TV Samsung 32\"",
        quantidade: 2000,
        preco: 5500,
    },
    {
        nome: "Notebook Acer Nitro 5",
        quantidade: 1000,
        preco: 5500,
    },
    {
        nome: "Gabinete Gamer 16GB i59400",
        quantidade: 1000,
        preco: 4500,
    }
];

server.get("/produtos", (req, res) => {
    res.status(200).json(produtos);
});


server.get("/produtos/:id", (req, res) => {
    const id = Number(req.params.id);// recebe o valor de id
    
    if (Number.isNaN(id)) {
        return res.status(400).json({msg: "Digite apenas números"});
    }
    
    const dados = produtos[id-1];
    if (dados) {
        return res.status(200).json(dados);
        
    } else {
        return res.status(404).json({msg:"Produto não encontrado"});
    }
    
});

server.post("/produtos",(req,res)=> {
    const produto = req.body;
    produtos.push(produto);
    return res.status(201).json({msg: "Produto cadastrado"})
});

server.get("/sistema", (req, res) => {
    // sem resposta a pagina fica aguardando

    const dados = {
        author: "Laura Ferreira",
        description: "Sistema de controle de estoque",
        version: "1.0.0"
    };

    res.json(dados);
});

server.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`);
    console.log(`Acesse em: http://localhost:${port}`);
});

// HTTP 
// GET (Buscar)
// POST (Salvar)
// PUT (Editar)
// DELETE (Apagar)