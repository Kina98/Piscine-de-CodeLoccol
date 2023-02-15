function inverseNomber(nombre) {
  if (nombre === 0) {
    return "0 n’a pas d’inverse";
  } else {
    return 1 / nombre;
  }
}

console.log(inverseNomber(4));
console.log(inverseNomber(0));

module.exports = inverseNumber;