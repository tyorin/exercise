//   #####################################################################
//   ##               ~~  to_reject_or_not_to_reject  ~~                ##
//   #####################################################################

// What happens if we reject AND resolve a promise?

// The Promises/A+ spec states that a promise, once fullfilled or
// rejected, may NOT change states for the rest of its lifetime.  This is
// an important feature of promises and it is also one of the things
// that differentiates it from an EventEmitter (and other forms of repeatable
// callbacks);

// Callback-style code usually requires a callback function to be invoked
// somewhere in the body of the function that it was passed to.  Many, if not
// most times, that function is intended to be called only once.  However, througherrors in logic, problems with syntax, or other simple mistakes it is
// possible to call your callback multiple times and create vexxing states in yourapp or insidious bugs.

// /*
//   this code is bad, but nonetheless common and has the nasty result of calling
//   the supplied callback more than once (possibly destroying the earth?)
//   it is conventional to return the first invocation of callback but it's
//   easy to overlook!
// */
// var function (user, callback) {
//   if (user) {
//     callback(null, user);
//   }
//   return callback("No user was found", null);
// }

// Task

// Let's build a simple script to PROVE to ourselves that promises may only resolve

// one time and all future attempts to resolve them will simply be ignored.

// 1. Create a promise using Q.defer
// 2. Pass console.log as the first AND second argument to your promise's "then" method
// 3. Resolve the promise with a value of "I FIRED"
// 4. Reject the promise with a value of "I DID NOT FIRE"

// If successful, your script should only log "I FIRED" and should NOT log
// "I DID NOT FIRE".


//  » To print these instructions again, run: `promise-it-wont-hurt print`.
//  » To execute your program in a test environment, run:
//    `promise-it-wont-hurt run program.js`.
//  » To verify your program, run: `promise-it-wont-hurt verify program.js`.
//  » For help with this problem or with promise-it-wont-hurt, run:
//    `promise-it-wont-hurt help`.



// var Q = require('q');
// var def = Q.defer();
// def.promise.then(console.log);
// def.resolve('I FIRED');
// def.reject('I DID NOT FIRE');



var q = require('q')
  , def = q.defer();

def.promise.then(console.log, console.log);
def.resolve("I FIRED");
def.reject("I DID NOT FIRE");
