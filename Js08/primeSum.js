function primeSum(n) {
  // Créer un tableau de booléens pour représenter si chaque nombre est premier ou non
  var isPrime = [];
  for (var i = 2; i < n; i++) {
    isPrime[i] = true;
  }

  // Utiliser le crible d'Eratosthène pour trouver tous les nombres premiers inférieurs à n
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (var j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Ajouter tous les nombres premiers au total
  var total = 0;
  for (var i = 2; i < n; i++) {
    if (isPrime[i]) {
      total += i;
    }
  }

  return total;
}

// Exemple d'utilisation :
console.log(primeSum(2000000)); // affiche 142913828922

module.exports = primeSum;