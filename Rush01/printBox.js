function printBox(width, height) {
  for (let i = 0; i < height; i++) {
    let row = '';
    for (let j = 0; j < width; j++) {
      if (i === 0 || i === height - 1) {
        // première et dernière rangées
        row += '*';
      } else if (j === 0 || j === width - 1) {
        // première et dernière colonnes
        row += '*';
      } else {
        // intérieur de la boîte
        row += ' ';
      }
    }
    console.log(row);
  }
}

printBox(5, 4);

module.exports = printBox;