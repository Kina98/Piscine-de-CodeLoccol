let strArr = ["(1,2)", "(2,4)", "(7,2)"];

function TreeConstructor(strArr) {
  // Créer un tableau pour stocker les parents de chaque nœud
  let parents = {};

  // Boucler sur chaque paire d'entiers
  for (let i = 0; i < strArr.length; i++) {
    // Extraire les deux entiers de la chaîne
    let pair = strArr[i].slice(1, -1).split(",");
    let child = pair[0];
    let parent = pair[1];

    // Vérifier si le nœud enfant a déjà un parent
    if (child in parents) {
      return false;
    }

    // Stocker le parent du nœud enfant
    parents[child] = parent;
  }

  // Vérifier que chaque nœud a au plus un parent
  for (let child in parents) {
    let parent = parents[child];
    let count = 0;

    for (let otherChild in parents) {
      if (parents[otherChild] === parent) {
        count++;
      }
    }

    if (count > 2) {
      return false;
    }
  }

  // Si toutes les conditions sont satisfaites, renvoyer true
  return true;
}

console.log(TreeConstructor(strArr));

module.exports = treeConstructor;