let pizzas = {// variavel pizzas recebendo objeto como valor
    sabor: "Palmito",
    preco: 39.90, 
    bordaCatupiry: true
};
//laço 'f'or' para trabalhar em cima do nosso objeto pizzas.
//estrutura do 'for in':
//'key' vai pegar as chaves do nosso objeto,
//'in' é o objeto que quero trabalhar.
for (let key in pizzas){//trabalhando com for in dentro de objetos
    
    console.log(key);//imprime todas as nossas chaves.
    /*
    sabor
    preco
    bordaCatupiry
    */
    console.log(pizzas);//imprime 3x meu objeto completo pois temos 3 chaves dentro do objeto pizzas.
    /*
    { sabor: 'Palmito', preco: 39.9, bordaCatupiry: true }
    { sabor: 'Palmito', preco: 39.9, bordaCatupiry: true }
    { sabor: 'Palmito', preco: 39.9, bordaCatupiry: true }
    */
    //console.log(pizzas.preco);
    /*
    39.9
    39.9
    39.9
    */
    console.log(pizzas['bordaCatupiry']);//imprime valor da nossa propriedade  bordaCatupiry
    /*
    true
    true
    true
    */
    console.log(pizzas[key]);
    /*
    Palmito
    39.9
    true
    */

}

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let key in pizzasDoces){//trabalhando com for in dentro de arrays
    console.log(key);//imprime todas as nossas chaves. sendo que cada uma delas correspondem a um sabor de pizza doce.(posições do meu array)
    /*
    0
    1
    2
    */
    console.log(pizzasDoces);
    /*
    [ 'chocolate', 'banana', 'morango' ]
    [ 'chocolate', 'banana', 'morango' ]
    [ 'chocolate', 'banana', 'morango' ]
    */
    console.log(pizzasDoces[key]);
    /*
    chocolate
    banana
    morango
    */
    console.log(key,pizzasDoces[key]);//mostra posição e valor
    /*
    0 chocolate
    1 banana
    2 morango
    */
}   

/*diferença entre for of e for in:*/
let food = ['hamburguer', 'bife', 'acarajé'];
for (let position in food) {
    console.log(position);
  };
  /*resultado: 0, 1, 2;
  Se percorrermos um objeto, também teremos o mesmo resultado. O For/in irá percorrer a propriedade declarada, e não o seu valor em si.
  Já o For/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o For/in . Vejamos o exemplo:
  */
  
  for (let value of food) {
    console.log(value);
  };
  //resultado: hamburguer, bife, acarajé;