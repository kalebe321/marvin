function tempo(data1, data2, unidade){
var inicio = new Date(data1);
var final = new Date(data2);
switch(unidade){
    
    case "dia":
    var periodo = Math.abs(inicio.getTime() - final.getTime())/1000/60/60/24;
    return Math.round(periodo)
    break;
    
    case "mês":
    var periodo1 = Math.abs(inicio.getTime() - final.getTime())/1000/60/60/24/30;
    return Math.round(periodo1)
    break;
    default:
    var periodo2 = Math.abs(inicio.getTime() - final.getTime())/1000/60/60/24/30/12;
    return Math.round(periodo2)
    break;
}

}

