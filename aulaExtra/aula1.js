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

students.push({name: "Steve", age: 25});

const bob = {name: "Bob", age: 21};
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

