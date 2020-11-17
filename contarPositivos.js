let valor = [];
valor[0] = parseFloat(gets());
valor[1] = parseFloat(gets());
valor[2] = parseFloat(gets());
valor[3] = parseFloat(gets());
valor[4] = parseFloat(gets());
valor[5] = parseFloat(gets());
let contador=0;
let cta=0;
for(cta=0; cta <6; cta++){
  if( valor[cta] > 0){
    contador++;
  }
}
console.log(contador+" valores positivos");