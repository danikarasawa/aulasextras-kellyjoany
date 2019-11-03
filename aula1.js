{ firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 } // A BARRA INVERSA É USADA PARA MOSTRAR PRO PROGRAMA O APÓSTROFE DO NOME E NÃO O FIM DA STRING. CADA LINGUAGEM TEM O SEU TIPO DE LEITURA DA APÓSTROFE. NO JAVASCRIPT É DESTA FORMA 

//ARRAY
const students = ["Bob", "Susy", "Ted", "Sarah"];
console.log(students[0]); //Bob

//OBJETOS
const bob = { name: "Bob", age: 17 };
const susy = { name: "Susy", age: 18 };
const ted = { name: "Ted", age: 18 };
const sarah = { name: "Sarah", age: 20 };

console.log(bob.name); //Bob
consoel.log(susy.age); //17

//ARRAY DE OBJETOS
const students = [
    { name: "Bob", age: 17 },
    { name: "Susy", age: 18 },
    { name: "Ted", age: 18 },
    { name: "Sarah", age: 20 }
];

console.log(students[3]); //name: "Sarah", age:20
console.log(students[3].name); //Sarah

students.push({ name: "Steve", age: 25 });

const bob = { name: "Bob", age: 21 };
students.push(bob);

const twoD = [
    ["Bob", "Susy", "Ted"]
    ["Lilly", "Sarah", "Bill"]
];

console.log(twoD[1]); //['Lilly', 'Sarah', 'Bill']
console.log(twoD[1][0]); // 'Lilly'
console.log(twoD[0[0]]); //'Bob'
console.log(twoD[0[3]]); // undefined
console.log(twoD[3[0]]); //TypeError: Cannot read property '0' of undefined

//OBJETO DENTRO DE OBJETO 

const classRoom = {
    teacher: {
        firstName: 'Greg',
        lastName: 'Dach',
        age: 38,
        address: {
            street: "3085 Kelton Knolls",
            city: "Aldaside",
            state: "Maryland",
            number: 300
        }
    }
};

console.log(classRoom.teacher.firstName); // 'Greg'
console.log(classeRoom.teacher.age); // 38
console.log(classRoom.lastName); // undefined
console.log(classRoom.teacher.address.city); // 'Aldaside' ISSO É CHAMADO DE CAMINHO ABSOLUTO

const teste = classRoom.teacher // teacher: {}
const novoTeste = teste.address // teacher.address: {}
const resultado = novoTeste.number // 300
// ESSAS CONSTANTES DE QUEBRA DEIXAM O CÓDIGO MAIS ELEGANTE!!!  

