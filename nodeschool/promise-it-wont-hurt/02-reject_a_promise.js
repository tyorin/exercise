//   #####################################################################
//   ##                    ~~  reject_a_promise  ~~                     ##
//   #####################################################################

// Introduction

// Rejecting a Promise

// When a promise is rejected, this is typically (though not always) used to
// indicate that a value was not successfully obtained by the promise.  Once
// a promise has been rejected, it can never be resolved (nor rejected again).

// Promises implement internal state machines that have strict rules against
// ever leaving either the resolved or rejected states.

// Task
// User "q" again to create a promise

// Create a function to print error.message using console.log.  Pass this
// function as a rejection handler to the "then" method of your promise.

// Manually reject that promise using setTimeout with a delay of 300ms and pass itan Error object with parameter "REJECTED!";

// Boilerplate

//   var q = require('q');
//   var defer = q.defer();

//   //your solution here


//  » To print these instructions again, run: `promise-it-wont-hurt print`.
//  » To execute your program in a test environment, run:
//    `promise-it-wont-hurt run program.js`.
//  » To verify your program, run: `promise-it-wont-hurt verify program.js`.
//  » For help with this problem or with promise-it-wont-hurt, run:
//    `promise-it-wont-hurt help`.



// var q = require('q');
// var defer = q.defer();

// defer.promise.fail(console.log)
// setTimeout(defer.reject, 300, 'REJECTED!');



var q = require('q');
var def = q.defer();

function printError (err) {
  console.log(err.message);
}

def.promise.then(null, printError);
setTimeout(def.reject, 300, new Error("REJECTED!"));
