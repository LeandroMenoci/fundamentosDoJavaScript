// == (comparação implícita)

const numero = 456;
const texto = '456';

// console.log(numero == texto); // true
console.log(numero === texto); // false 

// typeof
console.log(typeof numero); // number
console.log(typeof texto); // string

// == -> compara somente o valor
// === -> compara o valor e o tipo de dado

// conversão explícita
Number()
String()