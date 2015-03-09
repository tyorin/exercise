//   #####################################################################
//   ##                     ~~  throw_an_error  ~~                      ##
//   #####################################################################

// What happens when an error is thrown?

// One of the tremendous strengths of promises is that they handle errors in a
// manner similar to synchronous code.  Unlike in traditional callback-based code,you do not need to strictly handle all your errors at every step.

// If an error is thrown inside a function, it can be captured

// If an error is thrown inside a function, it will be handled by the next available
// "rejection" handler.  This allows you to write code that looks remarkably like a

// "try/catch" block would in synchronous code.

// try {
//   doSomethingRisky();
//   doAnotherRiskyThing();
// } catch (e) {
//   console.log(e);
// }

// The equivalent "promisified" code might look like:
// doSomethingRisky()
// .then(doAnotherRiskyThing)
// .then(null, console.log);

// Task

// Let's build exactly the system discussed above.
// Some invalid JSON will be available on process.argv[2];

// 1. Build a function called parsePromised that creates a promise,
//    performs JSON.parse in a try/catch block, and resolves or rejects
//    the promise depending on whether an error is thrown.
//    **NOTE** your function should synchronously return the promise!
// 2. Build a sequence of steps like the ones shown above that catches
//    any thrown errors and logs them to the console.


//  » To print these instructions again, run: `promise-it-wont-hurt print`.
//  » To execute your program in a test environment, run:
//    `promise-it-wont-hurt run program.js`.
//  » To verify your program, run: `promise-it-wont-hurt verify program.js`.
//  » For help with this problem or with promise-it-wont-hurt, run:
//    `promise-it-wont-hurt help`.



// var q = require('q'),
//     def = q.defer();

// var parsePromised = function () {
//   try {
//     def.resolve(JSON.parse({}));
//   } catch (e) {
//     def.reject(e);
//   }
//   return def.promise;
// }

// parsePromised().then(null, console.log);



var q = require('q');

function parsePromised (json) {
  var def = q.defer()
    , result;

  try {
    result = JSON.parse(json);
  } catch (e) {
    def.reject(e);
  }

  def.resolve(result);
  return def.promise;
};

parsePromised(process.argv[2])
.then(null, console.log)
