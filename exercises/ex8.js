const persones = [
    { nom: 'Anna', edat: 25 },
    { nom: 'Pere', edat: 15 },
    { nom: 'Joan', edat: 40 },
    { nom: 'Maria', edat: 35 },
    { nom: 'Carles', edat: 41 },
    { nom: 'Laura', edat: 18 },
    { nom: 'Marc', edat: 33 },
    { nom: 'Júlia', edat: 22 },
  ];

  // En aquest cas tenim ja un array d'objectes.

  // Calculem mitjana d'edat de les perosnes entre 25 i 40 anys.

  // Primer hem de filtrar per edat.
  // I després calcularem la suma i finalment dividirem entre el nombre d'elements.

  function mitjanaEdat(persones) {
    const personesFiltrades  persones.filter((persona)=> persona.edat >= 25 && persona.edat <= 40);
  }