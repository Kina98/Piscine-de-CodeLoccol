function displayCaracter(n) {
  // on boucle de 1 à n
  for (let i = 1; i <= n; i++) {
    // si le nombre est impair, on imprime "A"
    if (i % 2 !== 0) {
      console.log("A");
    }
    // si le nombre est pair, on imprime "B" ou "C" en alternant
    else {
      // si i est divisible par 4, on imprime "B", sinon on imprime "C"
      if (i % 4 === 0) {
        console.log("B");
      } else {
        console.log("C");
      }
    }
  }
}
displayCaracter(10);


module.exports = displayCaracter;