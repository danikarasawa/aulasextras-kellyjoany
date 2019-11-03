// MÉTODOS AVANÇADOS DE ARRAY

// HÁ MÉTODOS QUE ALTERAM O ARRAY ORIGINAL E OUTROS NÃO. É PRECISO ENTENDER A FUNÇÃO DE CADA UM 

//MAP, FILTER, REDUCE RETORNAM OBRIGATORIAMENTE UM ARRAY

//análise assintótica - PESQUISAR

const array = [1, 2, 3];
const newArray = [];

array.forEach(function(number){
    newArray.push(number*2);
})

console.log(newArray); // [2, 4, 6]

//MELHOR USAR O MAP, PORQUE FORRACH NÃO É UM MÉTODO IDEAL PARA APLICAR UMA FUNCTION E RETORNAR NOVO ARRAY

//COPY pesquisar
// pode-se retornar o que quiser com um .map

//passar parametro pro reduce muda o valor inicial 

const ages = people.reduce((sum, person) => {
    return sum + person.age;
}, 0);

// FILTER

var numbers = [1, 2, 3, 4, 5, 6]; 

var evenNumbers = numbers.filter(funtion(number){
return number % 2 === 0;

});

console.log(evenNumbers); // [2, 4, 6;]

// ESTRUTURAS DISTINTAS CONFORME VERSAO DO JAVASCRIPT 
function filterPoolES5(){
    const poolFilter = places.filter(function(thePlace){
        return thePlace.pool;
    });
    return poolFilter;
}

const filterPoolES6 = () => {
    const poolFilter = places.filter(thePlace => thePlace.pool)
    return poolFilter
;}

// BONUS

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

number.sort();

console.log(numbers); // [0, 1, 112, 18, 22, 223, 23, 64, 68, 9, 99] PORQUE SEGUE A TABELA UNICODE E NÃO A LÓGICA MATEMÁTICA

// O SORT() PRECISA DE CONTEXTO (a > b), (a < b), (a == b), etc

const words = ['hello', 'goodbye', 'a'];

word.sort((a, b) => {
    if(a > b){
        return -1;
    }
    if(a < b){
        return 1;
    }
    return 0;
});

console.log(words.reverse());

// DESESTRUTURAÇÃO DE ARRAY > PESQUISAR

// ...rest > variável que inclui todo o retante numa variável só > spread é como chamam os ...

const numbers1 = [2, 3, 5, 6, 76, 89];

[a, ...rest] = numbers1;
console.log(a, 'oi');
console.log(b, 'lindo');
console.log(rest, 'hehehe');
rest[2];


[ , ...rest] = numbers1