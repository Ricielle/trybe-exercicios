console.log("---------------AND-&&-------------------");

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log("-------------EXERCICES------------------");

/*
1-Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
2-Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
3-Implemente condicionais para que:
Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
4-Agora imprima a variável message fora das suas condições.
*/
const currentHour = 8;
var message = "";

if(currentHour >=22){
    message = "Não deveríamos comer nada, é hora de dormir";
    console.log(message);
}
else if(currentHour >=18 && currentHour<22){ 
    message = "Rango da noite, vamos jantar :D";
    console.log(message);
}
else if(currentHour >=14 && currentHour<18){ 
    message = "Vamos fazer um bolo pro café da tarde?";
    console.log(message);
}
else if(currentHour >=11 && currentHour<14){ 
    message = "Hora do almoço!!!";
    console.log(message);
}
else if(currentHour >=4 && currentHour<11){ 
    message = "Hmmm, cheiro de café recém passado";
    console.log(message);
}
else{
    console.log( "Hora de dormir zzzzzzzz");
}
// 8 = "Hmmm, cheiro de café recém passado";


console.log("--------------OR-----||----------------");
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log("-------------EXERCICES------------------");

/*
1-Crie uma variável chamada "weekDay" que recebe a string 
"quarta-feira".
2-Implemente condicionais para que:
Se nossa variável "weekDay" for "segunda-feira", "terça-feira",
"quarta-feira", "quinta-feira" ou "sexta-feira", 
imprima "Oba, mais um dia de aprendizado na Trybe >:D".
Se for algum dia de fim de semana, imprima 
"FINALMENTE, descanso merecido UwU".
*/

let weekDay = "quarta-feira";
if( weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira"|| weekDay === "sexta-feira"){
    message = "Oba, mais um dia de aprendizado na Trybe >:D";
    console.log(message);
}
else
/*(weekDay === "sábado" ||(weekDay === "domingo")*/{ 
    message = "FINALMENTE, descanso merecido UwU";
    console.log(message);
}

console.log("-------------NOT-(!)---------------------");
console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);

//STRINGS
const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

//NUMBERS
console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.


//NULL
console.log(!null); // true

//UNDEFINED
console.log(!undefined); // true
