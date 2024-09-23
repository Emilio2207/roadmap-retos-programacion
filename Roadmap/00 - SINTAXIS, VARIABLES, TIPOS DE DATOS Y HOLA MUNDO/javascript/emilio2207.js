// https://developer.mozilla.org/es/docs/Web/JavaScript

// Esto es un comentario en una sola linea.

/* Esto es un
comentario en
varias lineas. 
*/

let randomVar = "Variable"; // variable de tipo string.

const PI = 3.1416; // variable de tipo number.

let stringVar = "JavaScript!"; // string.
let intVar = 20; // number (entero).
let floatVar = 15.5; // number (decimal).
let booleanVar = true; // boolean, pueder ser true o false.
let undefinedVar; // undefined (variable no inicializada).
let nullVar = null; // null (ausencia de valor).
let symbolVar = Symbol("simbolo"); // symbol.
let bigIntVar = BigInt(9876543219876543); // BigInt, para valores muy grandes pero sigue siendo number.

console.log(`¡Hola, ${stringVar}`);

// Punto extra, para que figure en consola el tipo.
console.log(typeof stringVar);
console.log(typeof intVar);
console.log(typeof floatVar);
console.log(typeof booleanVar);
console.log(typeof undefinedVar);
console.log(typeof nullVar);
console.log(typeof symbolVar);
console.log(typeof bigIntVar);
