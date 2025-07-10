// Merging arrays. 
let a = [1, 2, 3]
let b = [4, 5, 6]
console.log(...a, ...b); // 1 2 3 4 5 6 

// Passing Array Elements in Function Arguments_> in a function where the element is required not the Array.
const c = [1, 2, 3, 4, 5]
console.log(Math.max(...c)); // 5

// Merging Objects.
const d = { x: 1 }
const e = { y: 2 }
console.log({ ...d, ...e });

//! Converting a String into a Array.
const f = "Prince"
console.log(...f); // P r i n c e