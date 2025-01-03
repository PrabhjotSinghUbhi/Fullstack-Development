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
)("Prabhjot Singh")