let sentence = "Bonjour, chers candidats comment vous allez aujourd'hui";

function countAcaracter(sentence) {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].toLowerCase() === 'a') {
      count++;
    }
  }
  return count;
}

console.log("le nombre d'occurrence de 'a' est: " +countAcaracter(sentence));

module.exports = countAcaracter;