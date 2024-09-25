/* Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje: 
Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits... 
(Ten en cuenta que cada lenguaje puede poseer unos diferentes.) 
*/

// aritméticos
let suma = 5 + 3;
console.log(suma);

let resta = 5 - 2;
console.log(resta);

let multiplicacion = 4 * 2;
console.log(multiplicacion);

let division = 10 / 2;
console.log(division);

let modulo = 7 % 3;
console.log(modulo);

let incremento = ++suma;
console.log(incremento);

let decremento = --resta;
console.log(decremento);

// lógico
let a = true,
  b = false;
console.log(a && b); // AND
console.log(a || b); // OR
console.log(!a); // NOT

// comparación
let mayorQue = 5 > 3;
console.log(mayorQue);

let menorIgualQue = 4 <= 4;
console.log(menorIgualQue);

let igual = 5 == "5";
console.log(igual);

let estrictamenteIgual = 5 === 5;
console.log(estrictamenteIgual);

// asignación
let x = 10;
x += 5; // 15 (asignación con suma)
x -= 3; // 12 (asignación con resta)
x *= 2; // 24 (asignación con multiplicación)
x /= 4; // 6 (asignación con division)
x %= 2; // 0 (asignación con módulo)
console.log(x);

// identidad (estricta)
let esIgual = 3 === "3";
console.log(esIgual);

let esDiferente = 3 !== "3";
console.log(esDiferente);

// pertenencia (en arreglos/objetos)
let arr = [1, 2, 3];
console.log(2 in arr);
console.log(1 in arr);

let obj = { nombre: "Emilio" };
console.log("nombre" in obj);

// bits
let bitAnd = 5 & 1;
console.log(bitAnd);

let bitOr = 5 | 1;
console.log(bitOr);

let bitXor = 5 ^ 1;
console.log(bitXor);

let desplazIzq = 5 << 1;
console.log(desplazIzq);

let desplazDer = 5 >> 1;
console.log(desplazDer);

/* Utilizando las operaciones con operadores que tú quieras, crea ejemplos 
que representen todos los tipos de estructuras de control que existan en tu lenguaje: 
Condicionales, iterativas, excepciones...  
*/

// Condicionales
// if - else
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// else if
let nota = 85;

if (nota >= 90) {
  console.log("Exelente");
} else if (nota >= 75) {
  console.log("Bueno");
} else {
  console.log("Debes mejorar");
}

// switch
let dia = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  default:
    console.log("Es otro dia");
}

// iterativas
// for
for (let i = 0; i < 9; i++) {
  console.log(`"Iteracion: ${i}"`);
}

// while
let j = 0;

while (j < 5) {
  console.log(`"Iteracion: ${j}"`);
  j++;
}

// do...while
let result = "";
let k = 0;

do {
  k = k + 1;
  result = result + k;
} while (k < 5);
console.log(result);

// excepciones
// try...catch
try {
  const resultado = 10 / 0;
  if (!isFinite(resultado)) {
    throw new Error("División por cero");
  }
  console.log(resultado);
} catch (error) {
  console.error("Se produjo un error: " + error.message);
} finally {
  console.log("Este bloque se ejecuta siempre");
}

/* DIFICULTAD EXTRA (Opcional): Crea un programa que imprima por consola todos 
los numeros comprendidos entre 10 y 55 (incluidos), pares, y que no son ni 
el 16 ni múltiplos de 3. 
*/

for (let i = 10; i <= 55; i++) {
  if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
    console.log(i);
  }
}
