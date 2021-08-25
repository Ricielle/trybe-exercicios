/*
1-Crie uma variável para armazenar o estado da pessoa candidata no 
processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
2-Crie uma estrutura condicional com o switch/case que irá imprimir 
as mensagens do exercício anterior se o estado da pessoa candidata 
for 'aprovada' , 'lista' ou 'reprovada' . Como default , 
imprima a mensagem de 'não se aplica' .*/

let nota = 55;//altere aqui a nota para ver a resposta

switch (nota){
    case  80:
    console.log('aprovada');
    break;
    case 70:
    console.log('lista');
    break;
    case 60:
    console.log('reprovada');
    break;
    default:
    console.log('digite nota válida: 60,70 ou 80');
}