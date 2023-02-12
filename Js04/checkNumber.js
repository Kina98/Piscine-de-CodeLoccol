function numberRange(num) {
  if (num < 5) {
    return "faible";
  } else if (num === 5 || num === 6) {
    return "moyen";
  }
}

console.log(numberRange(5)); // affiche "moyen"
console.log(numberRange(3)); // affiche "faible"
console.log(numberRange(6)); // affiche "moyen"
