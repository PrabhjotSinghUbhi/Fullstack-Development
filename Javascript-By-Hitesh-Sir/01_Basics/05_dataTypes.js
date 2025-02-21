/* 
  Primitives-7-types:
    1. String
    2. Number
    3. Boolean
    4. Null
    5. Undefined
    6. Symbol
    7. BigInt
*/
let name = "Prabhjot Singh";
let num = 5;
let inLoggedIn = false;
let humptyDumpty = null;
let x = Symbol("123");
let y = Symbol("123");

//Will tell about the specialty of symbols.  Will learn further in React.js library.
console.log(x === y);

let speedOfLight = 299792458n; // trialing n will convert into BigInt.
console.log("Too large variables can be stored in " + typeof speedOfLight);

/*
    JavaScript is a dynamically typed language. This means that the type of a variable is determined at runtime, rather than at compile time. You don't need to specify the type of a variable when you declare it, and a variable can hold values of different types at different points in time. 
*/

/* 
  Non-Primitive:
    1. Array
    2. Object
    3. Functions
    4. Reference
*/

const arr = [2, 3, 6, 7, 4]

const obj = {
  brand: "Titan", //   Property/key : value
  model: "X3",
  like: true,
};

// Null is a Object.
console.log("Null is " + typeof humptyDumpty);

// Stack and heap.

/*
^    Stack --> Primitive Datatypes.
^    Heap --> Non-Primitive Datatypes.

!    Stack is pass by value.
!    Heap is pass by reference.
 */

// Example for Stack(Primitive).
let karateKid = "Ralph Macchio"

let realKarateKid = karateKid;
realKarateKid = "William Zabka"

console.log(realKarateKid);

console.log("karate kid is " + karateKid);
console.log("Real karate kid is " + realKarateKid);

// Example for Heap(Non-Primitive)

let favCharacterInHIMYM = {
  Barney: "because he is awe-wait-for-it-some",
  Robin: "Because she is beautiful",
  Marshall: "Because he is Loyal and Relatable",
  Ted: "Because he is caring and beliefs in destiny",
  lily: "I don't know why"
}

let temp = favCharacterInHIMYM

temp.lily = "Because she got a nice smile."

console.log(temp.lily);
console.log(favCharacterInHIMYM.lily);