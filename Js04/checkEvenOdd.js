// déclaration de la fonction
function estPair(n) {
  // vérification si le nombre est pair
  if (n % 2 === 0) {
    // si oui, renvoie "pair"
    return "pair";
  } else {
    // sinon, renvoie "impair"
    return "impair";
  }
}

// utilisation de la fonction
var resultat = estPair(5);
console.log(resultat); // affichera "impair"
var resultat1 = estPair(6);
console.log(resultat1); // affichera "pair"