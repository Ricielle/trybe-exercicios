/*
1-Faça cinco programas, um para cada operação aritmética básica. 
Seu programa deve ter duas constantes, a e b , definidas no 
começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*Dica: Neste link você encontra mais detalhes sobre operadores 
matemáticos 😉
2-Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas constantes 
com os valores que serão comparados.
3-Faça um programa que retorne o maior de três números. 
Defina no começo do programa três constantes com os valores 
que serão comparados.
4-Faça um programa que, dado um valor definido numa constante, 
retorne "positive" se esse valor for positivo, "negative" se for 
negativo e "zero" caso contrário.
5-Faça um programa que defina três constantes com os valores dos 
três ângulos internos de um triângulo. Retorne true se os ângulos
representarem os ângulos de um triângulo e false , caso contrário.
Se algum ângulo for inválido o programa deve retornar uma mensagem 
de erro.
Para os ângulos serem de um triângulo válido, a soma dos três 
devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.
6-Escreva um programa que receba o nome de uma peça de xadrez e 
retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber 
o nome de uma peça com letras maiúsculas quanto com letras minúsculas,
sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar 
com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem
de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
7-Escreva um programa que converte uma nota dada em porcentagem 
(de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota 
passada for menor que 0 ou maior que 100.
8-Escreva um programa que defina três números em constantes e retorne
true se pelo menos uma das três for par. Caso contrário, ele retorna 
false .
Bonus: use somente um if .
9-Escreva um programa que defina três números em constantes e 
retorne true se pelo menos uma das três for ímpar. Caso contrário, 
ele retorna false .
Bonus: use somente um if .
10-Escreva um programa que se inicie com dois valores em duas 
constantes diferentes: o custo de um produto e seu valor de venda. 
A partir dos valores, calcule quanto de lucro (valor de venda 
descontado o custo do produto) a empresa terá ao vender mil desses 
produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar 
caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda 
pelo custo do mesmo, sendo que o imposto de 20% também faz parte do 
valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)
11-Uma pessoa que trabalha de carteira assinada no Brasil tem 
descontados de seu salário bruto o INSS e o IR. Faça um programa que, 
dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10.
Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

*/

console.log("---------------Exercicio 1------------------")
var resultado = 0;
let a = 10;
let b = 2;

console.log("Considere a = 10  e b = 2")
console.log("---Adição-----")
resultado = a+b;
console.log("a + b = ");
console.log(resultado);


console.log("---Subtração-----")
resultado = a-b;
console.log("a - b = ");
console.log(resultado);

console.log("---Multplicação-----")
resultado = a*b;
console.log("a * b = ");
console.log(resultado);

console.log("---Divisão-----")
resultado = a/b;
console.log("a / b = ");
console.log(resultado);

console.log("---Módulo = resto da divisão de a por b ----")
resultado = a%b;
console.log("a % b = ");
console.log(resultado);

console.log("---------------Exercicio 2------------------")
const num1 = 100;
const num2 = 200;

if(num1<num2){
    console.log(num2);
} else {
    console.log(num1);
}

console.log("---------------Exercicio 3------------------")
const n1 = 100;
const n2 = 200;
const n3 = 300;

if (n1>n2 && n1>n3){
    console.log(n1);
}else if (n2>n1 && n2>n3){
    console.log(n2);
}else{
    console.log(n3);
}


console.log("---------------Exercicio 4------------------")


//let numero = 1;//altere aqui a nota para ver a resposta
let numero = 0;
//let numero = -1;
switch (numero){
    case -1:
    console.log('negativo');
    break;
    case 0:
    console.log('zero');
    break;
    case 1:
    console.log('positivo');
    break;
    default:
    console.log('digite -1, 0 ou 1');
}

//ou usando o if:

if(numero<0){
    console.log('negativo');
}else if (numero===0){
    console.log('zero');
}else{
    console.log('positivo');
}

console.log("---------------Exercicio 5------------------")
const angulo1=90;
const angulo2=30;
const angulo3=60;
let condition = "";

if(angulo1>0 && angulo2>0 && angulo3>0 && angulo1+angulo2+angulo3 === 180){
    condition = true;
    console.log(condition);
}else{
    condition = false;
    console.log(condition);
}
console.log("---------------Exercicio 6------------------")

console.log("---------------Exercicio 7------------------")
let nota_percentual = 55;//altere aqui a nota para ver a resposta

if(nota_percentual>=90 && nota_percentual<=100){
    console.log('A');
}else if (nota_percentual>=80 && nota_percentual<90){
    console.log('B');
}else if (nota_percentual>=70 && nota_percentual<80){
    console.log('C');
}else if (nota_percentual>=60 && nota_percentual<70){
    console.log('D');
}else if (nota_percentual>=50 && nota_percentual<60){
    console.log('E');
}else if (nota_percentual>0 && nota_percentual<50){
    console.log('F');
}else {
    console.log('Nota inválida. Digite nota maior que zero e menor ou igual a 100');
}


console.log("---------------Exercicio 8------------------")

const x=1;
const y=2;
const z=3;

if (x%2===0 || y%2===0 || z%2===0){
    console.log('true');
}
console.log("---------------Exercicio 9------------------")

const x1=4;
const y1=2;
const z1=5;

if (x1%2===1 || y1%2===1 || z1%2===1){
    console.log('true');
}else{
    console.log('false');
}
console.log("---------------Exercicio 10------------------")

const custo=50.00+10.00;//10=20% do imposto
const venda=160.00;
let lucro;
lucro = venda-custo;
console.log(lucro*1000);

console.log("---------------Exercicio 11------------------")

const sal_bruto=1000;
var sal1=0;//salário base
var descinss=0;
var descir=0;
var sal_liq=0;
var parcela=0;

if(sal_bruto>0 && sal_bruto<=1556.94){    
    descinss = sal_bruto*0.08;
    sal1 = sal_bruto - descinss;
    console.log(sal1);
}else if(sal_bruto>=1556.95 && sal_bruto<=2594,92){
    descinss = sal_bruto*0.09;
    sal1 = sal_bruto - descinss;
    console.log(sal1);
}else if(sal_bruto>=2594.93 && sal_bruto<=5189.82){
    descinss = sal_bruto * 0.11;
    sal1 = sal_bruto - descinss;
    console.log(sal1);
}else if(sal_bruto>=5189.83 && sal_bruto<=2.594,92){
    descinss = 570.88;
    sal1 = sal_bruto - descinss;
    console.log(sal1);
}


if(sal1>0 && sal1<=1903.98){    
    console.log(sal1);
}else if(sal1>=1903.99 && sal1<=2826.65){    
    descir = sal1*0.075;
    parcela = 142.80-descir;
    sal_liq = sal1 - parcela;
    console.log(sal_liq);
}else if(sal1>=2826.66 && sal1<=3751.05){    
    descir = sal1*0.15;
    parcela = 354.80-descir;
    sal_liq = sal1 - parcela;
    console.log(sal_liq);
}else if(sal1>=3751.06 && sal1<=4664.68){    
    descir = sal1*0.225;
    parcela = 636.13-descir;
    sal_liq = sal1 - parcela;
    console.log(sal_liq);
}else{(sal1>=4664.68)
    descir = sal1*0.275;
    parcela = 869.36-descir;
    sal_liq = sal1 - parcela;
    console.log(sal_liq);
}