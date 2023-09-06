const express = require("express");
const estoque  = require("../app_estoque/")
const app = express();

app.get("/", function(req, res){
    res.send("API Estoque");
});

app.get("/api/adicionar/:id/:nome/:qtd", function(req, res){
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;

    let p = estoque.criar_produto(id, nome, qtd);
    estoque.add_produtos(p);
    res.json(p);
});

app.get("/api/listar", function(req, res){
    res.json(estoque.list_produtos());
});

app.get("/api/editar/:id/:qtd", function(req,res){
    let id = req.params.id;
    let qtd_atual = req.params.qtd_atual;
    res.json(estoque.editar_produto(id,qtd_atual));
});

const PORT = 8080
app.listen(PORT, function(){
    console.log("app rodando na porta ", + PORT)
});

