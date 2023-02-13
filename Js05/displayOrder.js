const numbers = [5, 2, 9, 1, 3];

function sortNumbers(numbers) {
  numbers.sort(function(a, b) {
    return a - b;
  });
  console.log(numbers);
}

sortNumbers(numbers);
