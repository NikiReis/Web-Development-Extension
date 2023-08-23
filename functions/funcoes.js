// Retorna erro de undefined
function somar(a){
  return a;
}
console.log(somar("5", teste,abc));

# Definindo parâmetros default
function somar2(a,b=5){
  return a+b
}
console.log(somar2(4));

// Definindo funções com inúmeros parâmetros

// Usando a propriedade 'arguments'
function somar() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(somar(2, 4, 6)); // Saída: 12

// Usando parâmetros de restrição
function multiplicar(...numeros) {
  return numeros.reduce((total, num) => total * num, 1);
}

console.log(multiplicar(2, 3, 4)); // Saída: 24

// Definindo função recursiva
function contar(n){
  if(n>0){
    // contar(n-1);
    // console.log(n);
    console.log(n)
    contar(n-1);"
  }
}
contar(7);

// Definindo funções dentro de objetos com objetos
const calculadora = {
  somar(a,b){
    return a + b;
  }
  subtrair(a,b){
    return a - b;
  }
}
console.log(calculadora.somar(1,2));

function enviarEmail(){
  console.log("Email: DOWNLOAD FINALIZADO");
}

// Criando funções com callback
function baixarArquivo(NomeDoArquivo, callback){
  console.log("baixando arquivo " + NomeDoArquivo);
  setTimeout(() => {
    console.log(NomeDoArquivo + "baixado com sucesso");
    callback();
  },5000);
}
baicarArquivo("aulaDeJS.mp4", enviarEmail);
