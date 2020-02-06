function  parOuImpar(num,num2){
    var numero = num % 2 ;
    var numero2 = num2 % 2;
    var total = numero || numero2;
    
    if(total === 0){
        return( "Os numeros são pares")
    }
    else{
        return("Os numeros não são pares")
    }
}
