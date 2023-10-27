// Exemple d'array de nombres
const numeros = [1, 2, 3, 4, 5];

// Exercici 3.1: suma amb for...of
function sumaForOf(numeros) {
  let suma = 0;
  for (const numero of numeros) {
    suma += numero;
  }
  return suma;
}

console.log(sumaForOf(numeros)); // Resultat: 15

// Exercici 3.2: suma amb mètode reduce
function sumaReduce(numeros) {
  return numeros.reduce((acc, numero) => acc + numero, 0);
}

console.log(sumaReduce(numeros)); // Resultat: 15
