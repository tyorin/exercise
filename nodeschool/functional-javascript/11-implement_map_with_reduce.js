//   #####################################################################
//   ##                ~~  Implement Map with Reduce  ~~                ##
//   #####################################################################


// # Task

// Use Array#reduce to implement a simple version of Array#map.

// ## Expected Output

// A function map that applies a function to each item in an array and collects the results in a new Array.


//     var nums = [1,2,3,4,5]

//     // `map` is your exported function
//     var output = map(nums, function double(item) {
//       return item * 2
//     })

//     console.log(output) // => [2,4,6,8,10]

// ## Arguments

//   * input: an arbitrary Array of any type.
//   * operation: an arbitrary Function which can be applied to items in `input`.

// ## Resources

//   * https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// ## Boilerplate


//     module.exports = function arrayMap(arr, fn) {
//       // SOLUTION GOES HERE
//     }



//  » To print these instructions again, run: `functional-javascript print`.
//  » To execute your program in a test environment, run:
//    `functional-javascript run program.js`.
//  » To verify your program, run: `functional-javascript verify program.js`.

// module.exports = function arrayMap (arr, fn) {
//   // console.error(arr);
//   // return arr.map(fn);
//   return arr.reduce(
//     function(prev, curr, index, array) {
//       return prev.concat(fn(curr, index, array));
//     },
//     []
//   );
// }

module.exports = function map(arr, fn) {
  return arr.reduce(function(acc, item, index, arr) {
    return acc.concat(fn(item, index, arr))
  }, [])
}
