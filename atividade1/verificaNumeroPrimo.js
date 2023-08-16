function numeroPrimo(num){
    for(var i = 2;i<num;i++){
        if(num % i === 0){
            return 0;
        }
    }
    for(var i = 3;i<num;i+=2){
        if(num % i === 0){
            return 1;
        }
    }
}
console.log(numeroPrimo(8));