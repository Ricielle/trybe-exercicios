/*
Para os próximos dois exercícios leia este
artigo e tente entender o que está 
acontencedo no código abaixo:

***artigo:
Introdução ao algoritmo de ordenação Bubble Sort
Imagine o seguinte vetor.

v = {5, 3, 2, 4, 7, 1, 0, 6}
Faça um algoritmo que ordene o vetor acima.

É disso que este artigo trata, algoritmos de ordenação.

Existem vários algoritmos para esse fim, neste artigo veremos o mais simples dele: Bubble Sort.

O algoritmo de “ordenação bolha”, ou “bubble sort”, recebeu este nome pela imagem pitoresca usada para descrevê-lo: os elementos maiores são mais leves, e sobem como bolhas até suas posições corretas.

W. Celes e J. L. Rangel

O Bubble Sort vai ordenando de par em par. Ele pega os dois primeiros elementos e pergunta se o primeiro é maior que o segundo. Se sim, os elementos são trocados (swap), se não, são mantidos. Vai repetindo o processo até o final do vetor.

Obviamente que ele não consegue ordenar todo o vetor em uma única rodada, ele terá que passar pelo vetor um certo número de vezes.

De maneira mais formal podemos destacar:

Percorra o vetor inteiro comparando elementos adjacentes (dois a dois)
Troque as posições dos elementos se eles estiverem fora de ordem
Repita os dois passos acima (n - 1) vezes, onde n é igual ao tamanho do vetor
OK, vamos fazer um exemplo para facilitar o entendimento.

Voltemos ao nosso vetor.

5, 3, 2, 4, 7, 1, 0, 6
Sabemos que iremos repetir o vetor n - 1 vezes. O tamanho do vetor é 8, logo iremos repetir 7 vezes o vetor (8-1).

Vamos chamar cada repetição de iteração.

Então, na primeira iteração, pegamos os dois primeiros valores e trocamos se estiverem fora de ordem.

(5  3) 2  4  7  1  0  6   pegamos o primeiro par
 3--5  2  4  7  1  0  6   trocamos

 3 (5  2) 4  7  1  0  6   pegamos o próximo par
 3  2--5  4  7  1  0  6   trocamos

 3  2 (5  4) 7  1  0  6   pegamos o próximo par
 3  2  4--5  7  1  0  6   trocamos

 3  2  4 (5  7) 1  0  6   pegamos o próximo par
 3  2  4  5--7  1  0  6   mantemos <----

 3  2  4  5 (7  1) 0  6   pegamos o próximo par
 3  2  4  5  1--7  0  6   trocamos

 3  2  4  5  1 (7  0) 6   pegamos o próximo par
 3  2  4  5  1  0--7  6   trocamos

 3  2  4  5  1  0  (7  6) pegamos último par
 3  2  4  5  1  0   6  7  trocamos
Chegamos ao fim da primeira iteração e, como dito, não foi suficiente para ordenar o vetor.

Teremos que reiniciar, só que agora sabemos que, pelo menos, o último valor (7) já está em seu devido lugar

Então iremos marcá-lo e não precisaremos percorrer todo o vetor na segunda iteração.

 3  2  4  5  1  0   6  [7]
Esse detalhe é importante é fará toda a diferença no entendimento do algoritmo.

Análise assintótica
n = vetor
Para cada elemento de n:

na primeira iteração temos n - 1
na segunda iteração temos n - 2
na terceira iteração temos n - 3
etc…
E em cada iteração temos n - k comparações.



Esboço da implementação
Aqui é um esboço pois no artigo seguinte veremos 4 exemplo em C.

// Vamos ter que percorrer todo o vetor, logo:
for (k = 1; k < n; k++) {
    // Dentro de cada iteração
    // percorremos novamente o vetor
    // em busca dos pares
    for (j = 0; j < n - k; j++) {
        // Comparamos
        if (vetor[j] > vetor[j + 1]) {
            // swap (trocamos)
            aux          = vetor[j];
            vetor[j]     = vetor[j + 1];
            vetor[j + 1] = aux;
        }
Este quarto e último exemplo é para mostrar que o que é bom ainda pode ser melhorado.

O código abaixo, ainda chega no mesmo resultado, porém ele faz isso através de um laço decrescente.

Isso implica em trocar for (k = 0; k < n - 1; k++) { por for (k = n - 1; k > 0; k++) {.

E no segundo laço, simplificamos, for (j = 0; j < n - k - 1; j++) { por for (j = 0; j < k; j++) {.

void bubble_sort (int vetor[], int n) {
    int k, j, aux;

    for (k = n - 1; k > 0; k--) {
        printf("\n[%d] ", k);

        for (j = 0; j < k; j++) {
            printf("%d, ", j);

            if (vetor[j] > vetor[j + 1]) {
                aux          = vetor[j];
                vetor[j]     = vetor[j + 1];
                vetor[j + 1] = aux;
            }
        }
    }
}
E para termos a certeza de que ele mantém o resultado esperado veja os índices:

[7] 0, 1, 2, 3, 4, 5, 6,
[6] 0, 1, 2, 3, 4, 5,
[5] 0, 1, 2, 3, 4,
[4] 0, 1, 2, 3,
[3] 0, 1, 2,
[2] 0, 1,
[1] 0,
*/




//let array=[1,2,3,4,5];
let array=[5,4,3,2,1];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
        console.log(array);
      } 
    }
  }

/*
o que foi impresso no terminal:
1a troca: elemento de indice 1 é menor que elemento de indice 2?
sim.
trocou as posições do 4 com o 5.
como?
linha 143: position recebe elemento de indice 0: (número 5)(ver array linha 138)
linha 144: elemento de indice 0 ficou vazio, e em seguida, recebeu elemento que era do indice 1: (número 4)
linha 145: elemento de indice 1 ficou desocupado, e em seguida recebeu o elemento de position: (número 5)
foi impresso linha 162:... e assim por diante...
[ 4, 5, 3, 2, 1 ]
[ 3, 5, 4, 2, 1 ]
[ 3, 4, 5, 2, 1 ]
[ 2, 4, 5, 3, 1 ]
[ 2, 3, 5, 4, 1 ]
[ 2, 3, 4, 5, 1 ]
[ 1, 3, 4, 5, 2 ]
[ 1, 2, 4, 5, 3 ]
[ 1, 2, 3, 5, 4 ]
[ 1, 2, 3, 4, 5 ]

Para o array acima foram feitas 10 trocas, isso porque os 
elementos estavam em ordem decrescente e foi necessário  
trocar cada um deles
1-Ordene o array numbers em ordem crescente e imprima seus valores;

*/
console.log("--------------Exercício 1 - Bonus---------------")

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] <  numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] =  numbers[secondIndex];
        numbers[secondIndex] = position;
        console.log(numbers);
      } 
    }
  }

  /*
[ 3, 9, 5, 19, 70, 8, 100, 2, 35, 27 ]
[ 3, 5, 9, 19, 70, 8, 100, 2, 35, 27 ]
[ 3, 5, 8, 19, 70, 9, 100, 2, 35, 27 ]
[ 3, 5, 8, 9, 70, 19, 100, 2, 35, 27 ]
[ 3, 5, 8, 9, 19, 70, 100, 2, 35, 27 ]
[ 2, 5, 8, 9, 19, 70, 100, 3, 35, 27 ]
[ 2, 3, 8, 9, 19, 70, 100, 5, 35, 27 ]
[ 2, 3, 5, 9, 19, 70, 100, 8, 35, 27 ]
[ 2, 3, 5, 8, 19, 70, 100, 9, 35, 27 ]
[ 2, 3, 5, 8, 9, 70, 100, 19, 35, 27 ]
[ 2, 3, 5, 8, 9, 19, 100, 70, 35, 27 ]
[ 2, 3, 5, 8, 9, 19, 70, 100, 35, 27 ]
[ 2, 3, 5, 8, 9, 19, 35, 100, 70, 27 ]
[ 2, 3, 5, 8, 9, 19, 35, 70, 100, 27 ]
[ 2, 3, 5, 8, 9, 19, 27, 70, 100, 35 ]
[ 2, 3, 5, 8, 9, 19, 27, 35, 100, 70 ]
[ 2, 3, 5, 8, 9, 19, 27, 35, 70, 100 ]

=======================================
2-Ordene o array numbers em ordem decrescente
e imprima seus valores;
*/
console.log("--------------Exercício 2 - Bonus---------------")

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] =  numbers[secondIndex];
        numbers[secondIndex] = position;
        console.log(numbers);
      } 
    }
  }
/*foi necessário apenas mudar o sinal na linha 222:
[ 3, 2, 5, 8, 9, 19, 27, 35, 70, 100 ]
[ 5, 2, 3, 8, 9, 19, 27, 35, 70, 100 ]
[ 5, 3, 2, 8, 9, 19, 27, 35, 70, 100 ]
[ 8, 3, 2, 5, 9, 19, 27, 35, 70, 100 ]
[ 8, 5, 2, 3, 9, 19, 27, 35, 70, 100 ]
[ 8, 5, 3, 2, 9, 19, 27, 35, 70, 100 ]
[ 9, 5, 3, 2, 8, 19, 27, 35, 70, 100 ]
[ 9, 8, 3, 2, 5, 19, 27, 35, 70, 100 ]
[ 9, 8, 5, 2, 3, 19, 27, 35, 70, 100 ]
[ 9, 8, 5, 3, 2, 19, 27, 35, 70, 100 ]
[ 19, 8, 5, 3, 2, 9, 27, 35, 70, 100 ]
[ 19, 9, 5, 3, 2, 8, 27, 35, 70, 100 ]
[ 19, 9, 8, 3, 2, 5, 27, 35, 70, 100 ]
[ 19, 9, 8, 5, 2, 3, 27, 35, 70, 100 ]
[ 19, 9, 8, 5, 3, 2, 27, 35, 70, 100 ]
[ 27, 9, 8, 5, 3, 2, 19, 35, 70, 100 ]
[ 27, 19, 8, 5, 3, 2, 9, 35, 70, 100 ]
[ 27, 19, 9, 5, 3, 2, 8, 35, 70, 100 ]
[ 27, 19, 9, 8, 3, 2, 5, 35, 70, 100 ]
[ 27, 19, 9, 8, 5, 2, 3, 35, 70, 100 ]
[ 27, 19, 9, 8, 5, 3, 2, 35, 70, 100 ]
[ 35, 19, 9, 8, 5, 3, 2, 27, 70, 100 ]
[ 35, 27, 9, 8, 5, 3, 2, 19, 70, 100 ]
[ 35, 27, 19, 8, 5, 3, 2, 9, 70, 100 ]
[ 35, 27, 19, 9, 5, 3, 2, 8, 70, 100 ]
[ 35, 27, 19, 9, 8, 3, 2, 5, 70, 100 ]
[ 35, 27, 19, 9, 8, 5, 2, 3, 70, 100 ]
[ 35, 27, 19, 9, 8, 5, 3, 2, 70, 100 ]
[ 70, 27, 19, 9, 8, 5, 3, 2, 35, 100 ]
[ 70, 35, 19, 9, 8, 5, 3, 2, 27, 100 ]
[ 70, 35, 27, 9, 8, 5, 3, 2, 19, 100 ]
[ 70, 35, 27, 19, 8, 5, 3, 2, 9, 100 ]
[ 70, 35, 27, 19, 9, 5, 3, 2, 8, 100 ]
[ 70, 35, 27, 19, 9, 8, 3, 2, 5, 100 ]
[ 70, 35, 27, 19, 9, 8, 5, 2, 3, 100 ]
[ 70, 35, 27, 19, 9, 8, 5, 3, 2, 100 ]
[ 100, 35, 27, 19, 9, 8, 5, 3, 2, 70 ]
[ 100, 70, 27, 19, 9, 8, 5, 3, 2, 35 ]
[ 100, 70, 35, 19, 9, 8, 5, 3, 2, 27 ]
[ 100, 70, 35, 27, 9, 8, 5, 3, 2, 19 ]
[ 100, 70, 35, 27, 19, 8, 5, 3, 2, 9 ]
[ 100, 70, 35, 27, 19, 9, 5, 3, 2, 8 ]
[ 100, 70, 35, 27, 19, 9, 8, 3, 2, 5 ]
[ 100, 70, 35, 27, 19, 9, 8, 5, 2, 3 ]
[ 100, 70, 35, 27, 19, 9, 8, 5, 3, 2 ]


3-Agora crie um novo array a partir do array numbers , 
sem perdê-lo. Cada valor do novo array deverá ser igual 
ao valor correspondente no array numbers multiplicado pelo
seguinte. Por exemplo: o primeiro valor do novo array deverá 
ser 45, pois é a multiplicação de 5 (primeiro valor) 
e 9 (valor seguinte). 
Já o segundo valor do novo array deverá ser 27, 
pois é a multiplicação de 9 (segundo valor) 
e Agora crie um novo array a partir do array numbers,
sem perdê-lo. Cada valor do novo array deverá ser igual ao 
valor correspondente no array numbers multiplicado pelo 
seguinte. Por exemplo: o primeiro valor do novo array deverá 
ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor 
seguinte). Já o segundo valor do novo array deverá ser 27, 
pois é a multiplicação de 9 (segundo valor) e 3 (valor 
seguinte), e assim por diante. Caso não haja próximo valor, 
a multiplicação deverá ser feita por 2. Faça isso utilizando 
o for e o método push . O resultado deve ser o array abaixo:3
(valor seguinte), e assim por diante. Caso não haja próximo 
valor, a multiplicação deverá ser feita por 2. Faça isso 
utilizando o for e o método push .
O resultado deve ser o array abaixo:

[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

*/

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


console.log("--------------Exercício 3 - Bonus---------------")
console.log('-------');
console.log("Tamanho de Numbers = " + numbers1.length);
console.log('-------');
let mult = 0;
for (let a = 0; a < (numbers1.length-1); a += 1){  
  let numbers2 = [];  
  mult = numbers1[a] * numbers1[a+1];
  numbers2.push(mult);  
  console.log(numbers2);  
}
let ultimo_indice = 0;
ultimo_indice = numbers1[numbers1.length-1]*2;
console.log("["+ultimo_indice+"]");
//console.log('---push para resposta final:----');
//??????
