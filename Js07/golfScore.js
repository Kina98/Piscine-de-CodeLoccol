const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  let score = strokes - par;
  
  if (score === -2) {
    return names[0];
  } else if (score <= -3) {
    return names[1];
  } else if (score === -1) {
    return names[2];
  } else if (score === 0) {
    return names[3];
  } else if (score === 1) {
    return names[4];
  } else if (score === 2) {
    return names[5];
  } else {
    return names[6];
  }
}

console.log(golfScore(4, 1)); // "Hole-in-one!"
console.log(golfScore(4, 2)); // "Eagle"
console.log(golfScore(5, 2)); // "Eagle"
console.log(golfScore(4, 3)); // "Birdie"
console.log(golfScore(4, 4)); // "Par"
console.log(golfScore(1, 1)); // "Hole-in-one!"
console.log(golfScore(5, 5)); // "Par"

module.exports = golfScore;