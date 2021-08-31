
/*
variaveis que serão colocadas dentro do objeto singer:
let name = "Milton";
let lastName = "Nascimento";
let nickname="Bituca";
let age = 77;
let bestAlbuns=["Travessia", "Clube de esquina"];

*/

//Refatorando:teremos objeto singer com todas as suas propriedades:

let singer = {
    name:  "Milton",
    lastName: "Nascimento",
    nickname: "Bituca",
    age: 77,
    bestAlbuns: ["Travessia", "Clube de esquina","Minas"], //array de strings
    bornInfo: {
        city: "Rio de Janeiro",
        state: "RJ"
        
    }
};

//Como acessar os valores da propriedade, valores dentro de cada chave?
//Notação por ponto:
console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos');
//O cantor Milton Nascimento possui 77 anos

console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos');
//O cantor Milton Nascimento possui 77 anos

singer['fullName'] = singer.name + " " + singer.lastName;
console.table(singer);
/*
┌────────────┬─────────────┬────────────────────┬─────────┬─────────────────────┐
│  (index)   │      0      │         1          │    2    │       Values        │
├────────────┼─────────────┼────────────────────┼─────────┼─────────────────────┤
│    name    │             │                    │         │      'Milton'       │
│  lastName  │             │                    │         │    'Nascimento'     │
│  nickname  │             │                    │         │      'Bituca'       │
│    age     │             │                    │         │         77          │
│ bestAlbuns │ 'Travessia' │ 'Clube de esquina' │ 'Minas' │                     │
│  fullName  │             │                    │         │ 'Milton Nascimento' │
└────────────┴─────────────┴────────────────────┴─────────┴─────────────────────┘
*/
console.log('O cantor ' + singer.fullName + ' nasceu no estado de ' + singer.bornInfo.state);
//O cantor Milton Nascimento nasceu no estado de RJ