// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

module.exports = reverse;

// Solution  1
// function reverse(str) {
//   const revStr = str.split("").reverse().join("");
//   return revStr;
// }

// solution 2
// function reverse(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// Solution 3
// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// }
