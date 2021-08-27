/*
dica:
Após escrever cada algoritmo, responda novamente as seguintes perguntas:
Eu resolvi o problema?
Havia outras maneiras de resolver o problema?
A maneira que eu escolhi foi a mais eficiente possível?
Seria possível inverter ou retirar algum passo?
Se eu fosse um computador, conseguiria entender todas as intruções?
Lembre-se sempre: se você travar em algum exercício, recomece seu raciocínio com baby steps! Certamente você será capaz de dividir algum passo em outros passos menores. Isso ajudará muito na hora de resolver problemas.
                    
EXERCÍCIOS:

1-Para o primeiro exercício de hoje, faça um programa que,
dado um valor n qualquer, seja n > 1 , imprima na tela 
um quadrado feito de asteriscos de lado de tamanho n . 
Por exemplo:
n = 5

*****
*****
*****
***** 
*****

*/
console.log("--------------Exercicio 1-------------------")


let imprime1 = '';
let n = 5;

for (let linha = 0; linha <= n; linha +=1){
  imprime1 = '*****';
  console.log(imprime1);
}







/*
2-Para o segundo exercício, faça o mesmo que antes, 
mas que imprima um triângulo retângulo com 5 asteriscos 
de base. Por exemplo:
n = 5

*
**
***
****
*****


-------para imprimir de 5 em 5 asteriscos:
let imprime2 = '';
for (let i = 0; i <= n; i +=1){
  imprime2 += '';

  for (let j = 0; j < n; j += 1){
   imprime2 += '*';
  }
  console.log(imprime2);
}
*/

console.log("--------------Exercicio 2-------------------")


let imprime2 = '';
for (let linha = 0; linha <= n; linha +=1){
  imprime2 += '*';
  console.log(imprime2);
}
/*
3-Agora inverta o lado do triângulo. Por exemplo:
Atenção! Note que esse exercício é bem mais complexo 
que o anterior! Não basta, aqui, imprimir somente 
asteriscos. Você precisará de uma lógica para imprimir 
espaços também.


n = 5

    *
   **
  ***
 ****
*****

*/


console.log("--------------Exercicio 3-------------------")
/*
var imprime3 = '';
for (let linha = 0; linha <= n; linha +=1){
  
  console.log(imprime3);
  
}
*/
/* 
4- Depois, faça uma pirâmide com n asteriscos de base:
n = 5

  *
 ***
*****

*/

console.log("--------------Exercicio 4-------------------")
