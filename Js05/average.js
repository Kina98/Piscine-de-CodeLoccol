function moyenneNotes() {
  var notes = [20, 12, 8, 9];
  var sum = 0;
  for (var i = 0; i < notes.length; i++) {
    sum += notes[i];
  }
  var moyenne = sum / notes.length;
  console.log( + moyenne);
}

moyenneNotes();
