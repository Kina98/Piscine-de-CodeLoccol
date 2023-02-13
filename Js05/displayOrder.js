const numbers = [5, 2, 9, 1, 3];

function displayOrder(numbers) {
  numbers.sort(function(a, b) {
    return a - b;
  });
  console.log(numbers);
}

displayOrder(numbers);

module.exports = displayOrder;