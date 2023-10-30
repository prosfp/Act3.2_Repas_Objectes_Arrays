// Tens la següent informació que t'arriba d'una API:

const poblacioCiutats = {
  Barcelona: 1620343,
  Madrid: 3334730,
  Valencia: 791413,
  Sevilla: 690566,
  Bilbao: 345821,
};
// Crea una funció que, donada aquesta informació, mostri per consola la població total de les ciutats.

// Primer passem la informació de l'objecte a un array. En aquest cas només necessitem els valors:
function poblacioMitjana(ciutats) {
  const poblacioArray = Object.values(ciutats);
  const sumaPoblacio = poblacioArray.reduce(
    (acc, poblacio) => acc + poblacio,
    0
  );
  return sumaPoblacio / poblacioArray.length;
}

console.log(poblacioMitjana(poblacioCiutats)); // Resultat: 1266702.6

// Crea una funció que retorni únicament el nom de les ciutats amb una població superior a 1M.

function ciutatsSuperiorsAMillio(ciutats) {
  const ciutatsArray = Object.entries(ciutats);
  const ciutats1M = ciutatsArray.filter((ciutat) => ciutat[1] > 1000000);
  const ciutatsNoms = ciutats1M.map((ciutat) => ciutat[0]);
  return ciutatsNoms.join(', ');
}

console.log(ciutatsSuperiorsAMillio(poblacioCiutats)); // Resultat: [ 'Barcelona', 'Madrid' ]
