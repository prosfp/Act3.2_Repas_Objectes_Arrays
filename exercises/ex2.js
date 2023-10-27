// Creem un objecte amb una llista de productes buida
const llistaProductes = {
  productes: ['moniatos', 'castanyes'],
};

// Definim una funció per afegir productes a la llista
function afegirProducte(producte) {
  llistaProductes.productes.push(producte);
  console.log(`Productes a la llista: ${llistaProductes.productes.join(', ')}`);
}

// Exemple d'ús de la funció per afegir productes
afegirProducte('ous');
afegirProducte('llet');
afegirProducte('pa');
