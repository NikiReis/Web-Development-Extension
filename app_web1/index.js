const calc = require('./utils/calculadora');
const express = require('express');

const app = express();

app.get("/hello", function(req,res){
    res.send("Hello, World!");
});

app.get("/somar/:a/:b", function(req,res){
    let a = req.params.a;
    let b = req.params.b;
    res.send(`${a} + ${b}  ${calc.somar(a,b)}`);
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log("app rodando na porta "+PORT);
});

