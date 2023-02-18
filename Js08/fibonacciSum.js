function fibonacciSum() {
  let sum = 0;
  let S1 = 1;
  let S2 = 2;
  while (S2 <= 4000000) {
    if (S2 % 2 === 0) {
      sum += S2;
    }
    const next = S1 + S2;
    S1 = S2;
    S2 = next;
  }
  return sum;
}

console.log(fibonacciSum());

module.exports = fibonacciSum;