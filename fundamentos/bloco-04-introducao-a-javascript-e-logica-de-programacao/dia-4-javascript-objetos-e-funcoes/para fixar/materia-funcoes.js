/*
FUNÇÕES: São blocos de código que encapslam instruções que executam uma tarefa específica.
Divide o programa em partes menores
*/
//var statuscarro = "desligado";
var aceleracao = 0;
var rotacaoVolante = 0;

function LigarDesligar(statusCarro){
  if(statusCarro === "desligado"){
    statuscarro = "ligado";
  } else {
    statuscarro = "desligado";
  }
  return (statuscarro);
}

function acelerar(incremento){
  aceleracao = aceleracao + incremento;
  return  "Acelerando a "+ aceleracao +" m/s²";
}

function frear(decremento){
  aceleracao = aceleracao - decremento;
  return  "Desacelerando a "+ aceleracao +" m/s²";
}

function girarVolante(anguloRotacao){//"+" = girar pra esq./ "-" girar pra dir.
  rotacaoVolante = anguloRotacao;
  return  "Rotação do volante é "+ rotacaoVolante +" °";

}

LigarDesligar('desligado');
console.log(LigarDesligar('desligado'))
acelerar(100);
console.log(acelerar(100));//somou com os 100 da linha 36 pois estou chamando a função pela segunda vez
frear(50);
console.log(frear(50));//somou com os 50 da linha 38 pois estou chamando a função pela segunda vez
console.log(girarVolante(1));
console.log(girarVolante(-45));
console.log("Rotação negativa -> direita, positiva-> esquerda");