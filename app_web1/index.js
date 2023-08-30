const calc = require('./utils/calculadora');
<<<<<<< HEAD
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

=======
console.log(calc.somar(4,7));
>>>>>>> 6e39a355d4f2db54f5fc5ffa544445fa761a5ec4
