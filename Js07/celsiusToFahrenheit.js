function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 1.8) + 32;
  return fahrenheit;
}

let fahrenheit = celsiusToFahrenheit(30);
console.log(fahrenheit);

module.exports = celsiusToFahrenheit;