function pattern(numRows) {
  let model = '';
  for (let i = 1; i <= numRows; i++) {
    for (let j = 1; j <= i; j++) {
      model += '* ';
    }
    model += '\n';
  }
  return model;
}

// Exemple d'utilisation avec 5 lignes
console.log(pattern(5));

module.exports = pattern;