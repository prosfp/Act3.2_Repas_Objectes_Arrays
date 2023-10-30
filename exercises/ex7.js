//Calcular el preu total del carro de la compra:

const preusProductes = {
  llet: 1.5,
  pa: 2,
  ou: 0.5,
  formatge: 3,
};

function preuTotal() {
  let preuTotal = 0;
  for (let producte in preusProductes) {
    preuTotal += preusProductes[producte];
  }
  return preuTotal;
}

console.log(preuTotal());

//Ara amb reduce

function preuTotalReduce() {
  return Object.values(preusProductes).reduce((acc, preu) => acc + preu, 0);
}
