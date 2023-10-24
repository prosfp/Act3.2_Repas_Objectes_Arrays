// Donada la següent array:

const platsPreferits = ['pa amb tomàquet', 'pizza', 'hamburguesa', 'gelat'];

// Una funció que mostri per consola tot aquesta llista amb
// el títol "El meus plats preferits són: plat1, plat2, plat3...".

function mostrarPlatsPreferits() {
  console.log('Els meus plats preferits són: ' + platsPreferits.join(', '));
}

// O amb un for..of:

function mostrarPlatsPreferits2() {
  let missatge = 'Els meus plats preferits són: ';
  for (plat of platsPreferits) {
    missatge += plat + ', ';
  }
  console.log(missatge);
}
