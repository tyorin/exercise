//   #####################################################################
//   ##                       ~~  Basic: Map  ~~                        ##
//   #####################################################################


// # Task

// Convert the following code from a for-loop to Array#map:

//     function doubleAll(numbers) {
//       var result = []
//       for (var i = 0; i < numbers.length; i++) {
//         result.push(numbers[i] * 2)
//       }
//       return result
//     }

//     module.exports = doubleAll

// ## Arguments

//   * numbers: An Array of 1 to 20 Integers between 0 and 9

// ## Conditions

//   * Your solution should use Array.prototype.map()
//   * Do not use any for/while loops or Array.prototype.forEach.
//   * Do not create any unecessary functions e.g. helpers.

// ## Resources

//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// ## Boilerplate

//     function doubleAll(numbers) {
//       // SOLUTION GOES HERE
//     }

//     module.exports = doubleAll



//  » To print these instructions again, run: `functional-javascript print`.
//  » To execute your program in a test environment, run:
//    `functional-javascript run program.js`.
//  » To verify your program, run: `functional-javascript verify program.js`.

function doubleAll(numbers) {
  // var result = []
  // for (var i = 0; i < numbers.length; i++) {
  //   result.push(numbers[i] * 2)
  // }
  // return result
  return numbers.map(function (currentValue, index, array) {
    return currentValue * 2;
  })
}

module.exports = doubleAll
