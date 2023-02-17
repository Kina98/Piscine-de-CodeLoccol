function squarePerimeter(side) {
  let perimeter = 4 * side;
  let area = side * side;
  return { perimeter: perimeter, area: area };
}

let square = squarePerimeter(4);
console.log("perimeter :", square.perimeter);
console.log("area :", square.area);

module.exports = squarePerimeter;