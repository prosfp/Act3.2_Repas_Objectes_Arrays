// Exemple d'array d'strings
const paraules = ['gat', 'cotxe', 'casa', 'ordinador', 'sol'];

// Funció que retorna un nou array amb les paraules de més de 3 lletres
function paraulesMesDeTresLletres(paraules) {
  const resultat = [];
  for (const paraula of paraules) {
    if (paraula.length > 3) {
      resultat.push(paraula);
    }
  }
  return resultat;
}

console.log(paraulesMesDeTresLletres(paraules)); // Resultat: ["cotxe", "casa", "ordinador"]

// Amb un filter

function paraulesMesDeTresLletresFilter(paraules) {
  return paraules.filter((paraula) => paraula.length > 3);
}

console.log(paraulesMesDeTresLletresFilter(paraules)); // Resultat: ["cotxe", "casa", "ordinador"]

// Amb un forEach

function paraulesMesDeTresLletresForEach(paraules) {
  const resultat = [];
  paraules.forEach((paraula) => {
    if (paraula.length > 3) {
      resultat.push(paraula);
    }
  });
  return resultat;
}

console.log(paraulesMesDeTresLletresForEach(paraules)); // Resultat: ["cotxe", "casa", "ordinador"]

// Amb un reduce

function paraulesMesDeTresLletresReduce(paraules) {
  return paraules.reduce((acc, paraula) => {
    if (paraula.length > 3) {
      acc.push(paraula);
    }
    return acc;
  }, []);
}
