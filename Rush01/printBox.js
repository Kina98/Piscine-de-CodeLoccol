// Définit une fonction qui imprime une boîte avec une largeur et une hauteur spécifiées
function printBox(width, height) {
  // Parcours chaque ligne de la boîte
  for (let row = 1; row <= height; row++) {
    // Initialise une chaîne de caractères vide pour la ligne actuelle
    let line = '';
    // Parcours chaque colonne de la ligne actuelle
    for (let col = 1; col <= width; col++) {
      // Teste si la case actuelle est un coin
      if ((row === 1 || row === height) && (col === 1 || col === width)) {
        // Ajoute une étoile à la chaîne de caractères pour les coins
        line += '*';
      }
      // Teste si la case actuelle est sur le bord horizontal
      else if (row === 1 || row === height) {
        // Ajoute un tiret à la chaîne de caractères pour les bords horizontaux
        line += '-';
      }
      // Teste si la case actuelle est sur le bord vertical
      else if (col === 1 || col === width) {
        // Ajoute une barre verticale à la chaîne de caractères pour les bords verticaux
        line += '|';
      }
      // Si la case actuelle n'est ni un coin, ni sur un bord, elle est à l'intérieur de la boîte
      else {
        // Ajoute un espace à la chaîne de caractères pour l'intérieur de la boîte
        line += ' ';
      }
    }
    // Affiche la ligne complète à la console
    console.log(line);
  }
}

printBox(5, 4);
printBox(6, 5);

module.exports = printBox;