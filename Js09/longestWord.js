function longestWord(sen) {
  // Supprimez la ponctuation en remplaçant tout ce qui n'est pas une lettre ou un chiffre par un espace
  const cleanedSen = sen.replace(/[^a-zA-Z0-9]/g, " ");
  // Séparez la chaîne en un tableau de mots
  const words = cleanedSen.split(" ");
  // Initialisez une variable pour stocker le mot le plus long
  let longest = "";
  // Parcourez chaque mot dans le tableau
  words.forEach(function(word) {
    // Si la longueur du mot actuel est supérieure à celle du mot le plus long enregistré, mettez à jour la variable longest
    if (word.length > longest.length) {
      longest = word;
    }
  });
  // Retournez le mot le plus long trouvé
  return longest;
}

const input1 = "fun& !! temps";
const input2 = "J'aime les chiens";

console.log(`Entrée : ${input1}`);
console.log(`Sortie : ${longestWord(input1)}`);

console.log(`Entrée : ${input2}`);
console.log(`Sortie : ${longestWord(input2)}`);

module.exports = longestWord;