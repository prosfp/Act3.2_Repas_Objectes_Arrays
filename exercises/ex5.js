// Creem un array de tasques pendents
const tasquesPendents = [
  { descripcio: 'Estudiar JavaScript', estat: 'pendent' },
  { descripcio: 'Fer la compra', estat: 'pendent' },
  { descripcio: 'Fer exercici', estat: 'pendent' },
];

// Funció que mostra les tasques pendents
function mostrarTasquesPendents() {
  console.log('Tasques pendents:');
  for (const tasca of tasquesPendents) {
    if (tasca.estat === 'pendent') {
      console.log(`- ${tasca.descripcio}`);
    }
  }
}

// Funció que marca una tasca com a completada
function marcarTascaCompletada(descripcio) {
  for (const tasca of tasquesPendents) {
    if (tasca.descripcio === descripcio) {
      tasca.estat = 'completada';
      console.log(`Tasca "${descripcio}" marcada com a completada.`);
      return;
    }
  }
  console.log(`No s'ha trobat cap tasca amb la descripció "${descripcio}".`);
}

// Anem a afegir una funció per veure si queda almenys alguna tasca pendent

// Exemple d'ús de les funcions
mostrarTasquesPendents(); // Mostra les tasques pendents
marcarTascaCompletada('Fer la compra'); // Marca la tasca "Fer la compra" com a completada
mostrarTasquesPendents(); // Mostra les tasques pendents actualitzades
