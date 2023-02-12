function signe(n) {
  if (n < 0) {
    return "Negatif";
  } else {
    return "Positif";
  }
}

const n = 7;
console.log(signe(n));

const m = -5;
console.log(signe(m));

const p = 0;
console.log(signe(p));