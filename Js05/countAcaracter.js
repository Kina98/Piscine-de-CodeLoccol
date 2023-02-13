function countLetterA(sentence) {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].toLowerCase() === 'a') {
      count++;
    }
  }
  return count;
}

let sentence = "Bonjour, chers candidat comment vous allez aujourd'hui";
console.log(countLetterA(sentence)); // Output: 4
