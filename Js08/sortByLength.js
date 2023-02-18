function sorByLength(tableau) {
  // Utilisation de la méthode sort() pour trier le tableau par longueur croissante.
  tableau.sort(function(a, b) {
    return a.length - b.length;
  });
  return tableau;
}

let tableau = ['Longlong', 'Court', 'Court'];
let tableauTrie = sorByLength(tableau);
console.log(tableauTrie);

module.exports = sorByLength;