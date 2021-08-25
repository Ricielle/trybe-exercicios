let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);//number
console.log(typeof isEnrolled);//boolean
console.log(typeof patientInfo);//object
console.log(typeof patientEmail);//string

let patientId1 = '50';//alterei o nome da variável pois 'let' não altera o valor.
console.log(typeof patientId1);//string

const base = 5;
var height= 8;
const area = base * height;
console.log(area);

/* Perímetro: valor encontrado quando se soma
os quatro lados da figura. No caso do retângulo:
É expresso pela fórmula: 2(b + h).*/
let b = 10 ;
let h = 5 ;
const perimeter = 2*(b*h);
console.log(perimeter);