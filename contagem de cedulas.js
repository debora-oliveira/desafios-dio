let valor = parseInt(gets());
let cedulas= [100,50,20,10,5,2,1];
let qtdCedulas=[0,0,0,0,0,0,0];
console.log(valor);
for(let i = 0; i<=6;i++){
  qtdCedulas[i] = parseInt(valor / cedulas[i]); //calcula quantas cedulas precisa
  valor = parseInt(valor%cedulas[i]);  // pega o restante do valor para as próximas cedulas
  console.log(qtdCedulas[i]+' nota(s) de R$ '+cedulas[i]+',00');
}