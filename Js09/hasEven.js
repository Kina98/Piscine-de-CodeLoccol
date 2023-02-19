function hasEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}
console.log(hasEven([2]));

module.exports = hasEven;