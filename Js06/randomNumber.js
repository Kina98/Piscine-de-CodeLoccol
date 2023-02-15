function randomNumber() {
  // Génère un nombre aléatoire entre 1 et 10
  const RandomNumber = Math.floor(Math.random() * 10) + 1;
  
  // Affiche le nombre à l'écran
  console.log(RandomNumber);
  
  // Retourne le nombre généré
  return RandomNumber;
}

// Appelle la fonction pour générer et afficher un nombre aléatoire
randomNumber();

module.exports = randomNumber;