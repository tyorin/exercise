//   #####################################################################
//   ##                   ~~  values_and_promises  ~~                   ##
//   #####################################################################

// Do I HAVE to return promises??

// NO!  Fulfillment handlers may return promises OR values.  Your
// Promises/A+ library will do the correct thing and wrap your
// return value in a promise if need be.  This is awesome because
// it allows you to intermix values with promises in a chain.

// Imagine that you have a a cache of models that may already contain
// a model you would like to request from the server.  You could
// check your cache synchronously and return the found value OR send
// an ajax request to your remote server to fetch it.

// Wrapping this functionality in a promise means that both behaviors
// can be consumed under a single abstraction:

// doSomeSetup()
// .then(function () {
//   return cache.fetchModel(id)
//     ? cache.fetchModel(id)
//     : promisedAjax("users/" + id);
// })
// .then(displayUser)
// .then(null, handleError);

// The key thing to understand here is that your handlers will WRAP
// your return values in promises even if they are obtained synchronously.

// Another very important point to understand is that, as discussed
// before, the returned value will resolve on the NEXT turn of the event
// loop.

// Task

// Construct a promise chain that returns VALUES to prove to yourself
// that promise handlers will wrap your returned values in promises
// allowing additional chaining.

// 1. Construct a promise using Q's defer
// 2. Construct a function "attachTitle" which prepends "DR. " to
//    its first argument and returns the result.
// 3. Build a promise chain off the promise we constructed initially
//    that first calls "attachTitle" then calls console.log.
// 4. Resolve the promise you created with a value of "MANHATTAN".

// If your program runs successfully, it should print out "DR. MANHATTAN"
// which is extremely exciting.


//  » To print these instructions again, run: `promise-it-wont-hurt print`.
//  » To execute your program in a test environment, run:
//    `promise-it-wont-hurt run program.js`.
//  » To verify your program, run: `promise-it-wont-hurt verify program.js`.
//  » For help with this problem or with promise-it-wont-hurt, run:
//    `promise-it-wont-hurt help`.



// var q = require('q'), deferred = q.defer();
// var attachTitle = function (name) {
//   return 'DR. ' + name;
// }
// deferred.promise.then(attachTitle).then(console.log);
// deferred.resolve('MANHATTAN');



var q = require('q')
  , def = q.defer();

function attachTitle (name) {
  return "DR. " + name;
}

def.promise
.then(attachTitle)
.then(console.log);

def.resolve("MANHATTAN");
