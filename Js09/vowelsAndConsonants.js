function vowelsAndConsonants(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsArray = [];
  let consonantsArray = [];

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (vowels.includes(letter)) {
      vowelsArray.push(letter);
    } else {
      consonantsArray.push(letter);
    }
  }

  for (let i = 0; i < vowelsArray.length; i++) {
    console.log(vowelsArray[i]);
  }

  for (let i = 0; i < consonantsArray.length; i++) {
    console.log(consonantsArray[i]);
  }
}

vowelsAndConsonants('javascriptloops');

module.exports = vowelsAndConsonants;