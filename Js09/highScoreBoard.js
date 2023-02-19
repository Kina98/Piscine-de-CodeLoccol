// 1. Créer un nouveau tableau des meilleurs scores
function createScoreBoard() {
  return {
    'The Best Ever': 1000000
  };
}

// 2. Ajout de joueurs à un tableau de scores
function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

// 3. Retirer des joueurs d'un tableau d'affichage
function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

// 4. Augmenter le score d'un joueur
function updateScore(scoreBoard, player, score) {
  scoreBoard[player] += score;
  return scoreBoard;
}

// 5. Appliquer les points bonus du lundi
function applyMondayBonus(scoreBoard) {
  for (const player in scoreBoard) {
    scoreBoard[player] += 100;
  }
  return scoreBoard;
}

// 6. Normaliser un score élevé
function normalizeScore(params) {
  const { score, normalizeFunction } = params;
  return normalizeFunction(score);
}

// 1. Créer un nouveau tableau des meilleurs scores
const scoreBoard = createScoreBoard();
console.log(scoreBoard); // { 'The Best Ever': 1000000 }

// 2. Ajout de joueurs à un tableau de scores
addPlayer(scoreBoard, 'Dave Thomas', 0);
console.log(scoreBoard); // { 'The Best Ever': 1000000, 'Dave Thomas': 0 }

// 3. Retirer des joueurs d'un tableau d'affichage
removePlayer(scoreBoard, 'Dave Thomas');
console.log(scoreBoard); // { 'The Best Ever': 1000000 }

// 4. Augmenter le score d'un joueur
updateScore(scoreBoard, 'The Best Ever', 1);
console.log(scoreBoard); // { 'The Best Ever': 1000001 }

// 5. Appliquer les points bonus du lundi
applyMondayBonus(scoreBoard);
console.log(scoreBoard); // { 'The Best Ever': 1000101 }

// 6. Normaliser un score élevé
function normalize(score) {
  return score / 100;
}

console.log(normalizeScore({ score: 1000, normalizeFunction: normalize })); // 10


module.exports = highScoreBoard;