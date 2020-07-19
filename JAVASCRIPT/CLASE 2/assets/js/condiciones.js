// Ejercicios de condiciones

let valorNumerico1 = 200;
let valorNumerico2 = 100;

// Uso del if
console.log("Uso del if:");
if (valorNumerico1 > valorNumerico2) {
    console.log("El primer valor es mayor al segundo valor");
}

console.log("Caso 2: Uso del if:");
if (valorNumerico1 == valorNumerico2) {
    console.log("El primer valor es mayor al segundo valor");
}


// Uso del else:
console.log("Uso del else:");
if (valorNumerico1 < valorNumerico2) {
    console.log("El primer valor es mayor al segundo valor");
} else {
    console.log("No se cumple la condicion");
}

console.log("Caso 2: Uso del else");
if (valorNumerico1 < valorNumerico2) {
    console.log("El primer valor es mayor al segundo valor");
}
if (valorNumerico1 < valorNumerico2) {
    console.log("El primer valor es mayor al segundo valor");
} else {
    console.log("No se cumple la condicion");
}

//Uso del if y los operadores logicos
// Uso del if
console.log("Uso del if:");
if (valorNumerico1 !== 0 && valorNumerico2 !== 0 && valorNumerico1 > valorNumerico2) {
    console.log("Caso de if con operadores logicos");
}

// En este ejercicio probamos como usar el else if
// Cuando se usa else if la evuluaciones se hacen en serie, una despues de otra y solo se ejecutara
// la que cumpla la condicion dada
let numero = 90;
console.log("Uso del else if:");

if (numero == 0) {
    console.log("Numero tiene valor: " + numero);
} else if (numero == 1) {
    console.log("Numero tiene valor: " + numero);

} else if (numero == 2) {
    console.log("Numero tiene valor: " + numero);

} else {
    console.log("No se evalua el valor de numero: " + numero);
}


