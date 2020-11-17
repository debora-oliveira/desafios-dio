let pares = 0; let impares = 0;let positivos = 0; let negativos = 0;
let values = [];
for(let a = 0; a <=4; a++){
  values[a]=parseInt(gets());
  if((values[a]%2)==0){
    pares++;
  }else{
    impares++;
  }
  if(values[a] < 0){
    negativos++;
  }else if(values[a] > 0){
    positivos++;
  }
}
//console.log("negativos:"+negativos); console.log("positivos:"+positivos);
console.log(pares+' valor(es) par(es)');
console.log(impares+' valor(es) impar(es)');
console.log(positivos+' valor(es) positivo(s)');
console.log(negativos+' valor(es) negativo(s)');

