//! Don’t forget to put ; in the end of the function call  ();.

/*
^   Functions  that run immediately or are invoked  immediately after their creation and prevents our code from the pollution of global scope’s variables etc are called IIFE’s
*/

// IIFE - Immediately Invoked Function Expressions
function one() {
    console.log(`DB connected`)
}
one();

// or 

(function two() {
    console.log(`Bluetooth device connected successfully.`)
})();

// Arrow function.
(
    () => {
        console.log(`Speaker Mode activated.`);
    }
)();

(
    (username) => {
        console.log(`Hello ${username}`)
    }
)("Prabhjot Singh");

(
    (username) => (console.log(`hello ${username}`))
)(`prince`)