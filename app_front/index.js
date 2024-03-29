const express = require("express");
const mustacheExpress = require("mustache-express");
const app = express();

app.engine("html", mustacheExpress());
app.set("view engine","html");
app.set("views",__dirname + "/views");

app.get("/",function(req,res){
    res.render("index.html");
});

app.get("/",function(req, res){
    res.send("Olá, mundo!");
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log("app redoando na porta"+PORT);
});

app.get("/", function(req,res){
    res.render("index.html");
});