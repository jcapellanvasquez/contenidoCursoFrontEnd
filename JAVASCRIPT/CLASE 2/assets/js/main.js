// Ejemplos de operadores de comparacion

// Tipos de operadores
// ==
// === este operador evalua el contenido de la variable y el tipo de dato
// <, <=
// >, >=
// !=
// !== este operador evalua el contenido de la variable y el tipo de dato

// Ejercicios

let valorNumerico = 230;
let valorNumerico2 = "230";
let valorCaracteres = "23";
let resultadoComparacion = valorNumerico == valorCaracteres;
let resultadoComparacionEstricta = valorNumerico === valorCaracteres;
let resultadoComparacionMayorMenor = valorNumerico <= valorNumerico2;
let valorBooleano = true;
let valorBooleano2 = "true";
let resultadoNegacion = valorNumerico != valorNumerico2;


console.log("Comparacion suave");
console.log(resultadoComparacion);

console.log("Comparacion estricta");
console.log(resultadoComparacionEstricta);

console.log("Comparacion mayor o menor");
console.log(resultadoComparacionMayorMenor);

console.log("Negacion booleano");
console.log(resultadoNegacion);


// Ejemplos de operados logicos

// || OR
// && AND
// ! DIFERENTE ~ NEGACION

let resultadoOperadorOR = valorNumerico == valorCaracteres || valorNumerico <= valorNumerico2;
console.log("Operador logico OR o ||");
console.log(resultadoOperadorOR);

let resultadoOperadorAND = !(valorNumerico == valorCaracteres) && valorNumerico <= valorNumerico2;
console.log("Operador logico AND o &&");
console.log(resultadoOperadorAND);

let resultadoOperadorNEGACION = !valorBooleano;
console.log("Caso 1: Operador logico NEGACION o !");
console.log(resultadoOperadorNEGACION);

let resultadoOperadorAND = !(valorNumerico == valorCaracteres) && valorNumerico <= valorNumerico2;
console.log("Caso 2: Operador logico NEGACION o !");
console.log(resultadoOperadorAND);







