//? This is Part Two of Arrays and it will be useful in React.js and Node.js .                                          

let TourCountries = ["Canada", "America", "Switzerland", "Italy", "England", "Japan"]
let theirCapitals = ["Ottawa", "Washington Dc", "Bern", "Rome", "London", "Tokyo"]

// !Imp: Arrays can store element of any datatypes so it even stores arrays as a element. 
// TourCountries.push(theirCapitals)
// console.log(TourCountries);

// !Imp: Using concat() function will add the elements of first array to second array.  
// console.log(TourCountries.concat(theirCapitals));

//! or alternatively we can use spread operator.
let dream = [...TourCountries, ...theirCapitals]
// console.log(dream);

//? For Array like:
let arr = [1, 2, [3, 4, 5, [6, 7, 8], 9, 10], 11, 12, 13]
//? we can use a function like flat(depth) to convert all these subarray into the main array.
console.log(arr.flat(2));

//? We can also convert any thing into.
let name = "Prabhjot Singh"
console.log(`Is a Array: ${Array.isArray(name)}`);
name = Array.from(name)
console.log(name)
console.log(`Is a Arrays:  ${Array.isArray(name)}`)

//?: to convert variables into arrays.
a = 4;
b = 1;
c = 5;

console.log(Array.of(a,b,c));

//!IMP: INTERVIEW--
let obj = {
    name: "prince",
    designation: "SDE-2"
}

//? Will return a empty array because it not specified that the should be of properties or the values.
console.log(Array.from(obj))
