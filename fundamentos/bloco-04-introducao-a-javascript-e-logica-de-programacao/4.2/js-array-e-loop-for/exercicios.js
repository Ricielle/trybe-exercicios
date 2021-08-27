/*Agora a prática
Vamos colocar mão na massa?
Preparamos estes exercícios para você fixar seus conhecimentos
em JavaScript - Array e loop For 🎯💪. Vamos lá?
Aprofunde seus conhecimentos
Leia atentamente os enunciados e faça o que se pede! 
Iremos utilizar esse array para realizar os exercícios 
do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*
1-Nesse primeiro exercício, percorra o array 
imprimindo todos os valores nele contidos 
com a função console.log() ;
*/

console.log("--------------------1--------------------------")
for(var contador = 0;contador < numbers.length; contador++){
    console.log(numbers[contador]);
}


/*
2-Para o segundo exercício, some todos os valores
contidos no array e imprima o resultado;*/
console.log("--------------------2--------------------------")

let soma = 0;
for(let a = 0; a < numbers.length; a++){
    
    soma += numbers[a];
    console.log(soma);
}
console.log("soma: " + soma);
/*
3-Para o terceiro exercício, calcule e imprima 
a média aritmética dos valores contidos no array;

A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

*/
console.log("--------------------3--------------------------")
let media = 0;
media = soma/numbers.length;
console.log(media);
/*
4-Com o mesmo código do exercício anterior, 
caso o valor final seja maior que 20, imprima
a mensagem: "valor maior que 20". 
Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
*/
console.log("--------------------4--------------------------")

if (media>20){
    console.log("valor maior que 20");
}else {
    console.log("valor menor ou igual a 20");
}

/*
5-Utilizando for , descubra qual o maior valor contido 
no array e imprima-o;
*/
console.log("--------------------5--------------------------")

var maior = 0;
for(let b = 0; b < numbers.length;b++){
    if(numbers[b] > maior){
        maior = numbers[b];
          
    }    
}
console.log("O maior numero do array é:");   
console.log(maior);      

/*
6-Descubra quantos valores ímpares existem no array e 
imprima o resultado. Caso não exista nenhum, 
imprima a mensagem: "nenhum valor ímpar encontrado";
*/
console.log("--------------------6--------------------------")
var impar = 0;
for(let b = 0; b < numbers.length;b++){
    if(numbers[b] %2 === 1){
        impar++;
          
    }    
}

if(impar>=1){
    console.log("A quantidade de números impares = "+impar)
}else {
    console.log("nenhum valor ímpar encontrado")
}
/*
7-Utilizando for, descubra qual o menor valor contido 
no array e imprima-o;
*/
console.log("--------------------7--------------------------")
var menor = 0;
for(let b = 0; b < numbers.length;b++){
    if(numbers[b] < numbers[b+1] ){
        menor = numbers[b];
          
    }    
}
console.log("O menor numero do array é:");   
console.log(menor); 
/*
8-Utilizando for, crie um array que vá de
1 até 25 e imprima o resultado;
*/
console.log("--------------------8--------------------------")


let lista=[];
for(let d = 1, n; d <26; d++ ){
  lista.push(d);  // adiciona um numero
}
console.log(lista); 

/*9-Utilizando o array criado no exercício
anterior imprima o resultado da divisão 
de cada um dos elementos por 2 .
*/

console.log("--------------------9--------------------------")

let lista2=[];
for(let d = 1, n; d <26; d++ ){
  lista2.push(d%2);  // adiciona um numero
}
console.log(lista2); 