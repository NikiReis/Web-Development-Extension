const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();

app.engine("html", mustacheExpress());
app.set("view engine","html");
app.set("views",__dirname + '/views');

app.get('/',function (req,res){
    res.render("index.html");
})

app.get("/", function(req,res){
    let usuario = {
        nome: "Linek",
        telefone: 123123
    }

    res.render("index.html", {usuario});
});

const PORT  = 8080;
app.listen(PORT, function(){
    console.log("app rodando na webs pela porta " + PORT);
})