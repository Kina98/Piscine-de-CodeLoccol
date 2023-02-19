function displayCaracter(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log("A");
    }
    else {
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