// Définir la fonction CodelandUsernameValidation
function CodelandUsernameValidation(str) {
  // Vérifier si la chaîne a entre 4 et 25 caractères
  if (str.length < 4 || str.length > 25) {
    return false;
  }
  // Vérifier si le nom d'utilisateur commence par une lettre
  if (!/^[a-zA-Z]/.test(str)) {
    return false;
  }
  // Vérifier si le nom d'utilisateur ne contient que des lettres, des chiffres et des soulignements
  if (!/^[a-zA-Z0-9_]+$/.test(str)) {
    return false;
  }
  // Vérifier si le nom d'utilisateur ne se termine pas par un soulignement
  if (str.endsWith('_')) {
    return false;
  }
  // Si toutes les règles sont respectées, renvoyer true
  return true;
}

// Exécuter la fonction avec les exemples donnés
console.log(CodelandUsernameValidation("aa_")); // false
console.log(CodelandUsernameValidation("u__hello_world123")); // true

module.exports = codeLandusernamevalidation;