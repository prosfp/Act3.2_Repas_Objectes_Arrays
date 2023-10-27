// Donada la següent array:

const platsPreferits = ['pa amb tomàquet', 'pizza', 'hamburguesa', 'gelat'];

// Una funció que mostri per consola tot aquesta llista amb
// el títol "El meus plats preferits són: plat1, plat2, plat3...".

function mostrarPlatsPreferits() {
  console.log('Els meus plats preferits són: ' + platsPreferits.join(', '));
}

// O amb un for..of:

function hello() {
  console.log('Hello world');
}

function mostrarPlatsPreferits2() {
  let missatge = 'Els meus plats preferits són: ';
  for (plat of platsPreferits) {
    const index = platsPreferits.indexOf(plat);
    const isLast = index === platsPreferits.length - 1;
    !isLast ? (missatge += plat + ', ') : (missatge += plat + '. ');
  }
  console.log(missatge);
}

mostrarPlatsPreferits2();

// O també amb un forEach:

function mostrarPlatsPreferits3() {
  let missatge = 'Els meus plats preferits són: ';
  platsPreferits.forEach(function (plat) {
    missatge += plat + ', ';
  });
  console.log(missatge);
}
