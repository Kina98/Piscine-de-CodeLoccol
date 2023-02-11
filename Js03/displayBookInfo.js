const book = {
  title: "L'Enfant Noir",
  author: "Camara Laye",
  year: 1953
};

function showBookInfo(book) {
  console.log("Titre : " + book.title);
  console.log("Auteur : " + book.author);
  console.log("Année : " + book.year);
}

showBookInfo(book);