const phrase = "Voici l'exemple de la chaines";
function extractWords(phrase) {
  // Diviser la phrase en mots individuels en utilisant l'espace comme séparateur
  const words = phrase.split(' ');

  // Initialiser un tableau vide pour stocker les mots extraits
  const container = [];

  // Parcourir chaque mot et l'ajouter au tableau container
  for (let i = 0; i < words.length; i++) {
    container.push(words[i]);
  }

  // Retourner le tableau final de mots extraits
  return container;
}

const motsExtraits = extractWords(phrase);
console.log(motsExtraits);

module.exports = extractWords;