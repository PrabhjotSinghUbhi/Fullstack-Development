//! imp: FOR INTERVIEW.

//? FIRST: TOPIC.
/*
^   TRUTHY AND FALSY VALUES IN STRINGS.
*   ->  " " OR ' ' empty string has 'FALSE' value.
*   ->  'xyz' non-empty string has 'TRUE' value.    
*/
let one = ''
let two = 'xyz'
let boolOne = Boolean(one)
let boolTwo = Boolean(two)
console.log(`empty string is ${boolOne}`);
console.log(`non empty string is ${boolTwo}`);

/*
^   ALL FALSY VALUES:
*       -> 'false' is false.
*       -> 0 is false.
*       -> -0 is also false.
*       -> 'bigInt' is also false.
*       -> 'null' is also false.
*       -> 'undefined' is false.
*       -> 'NaN' is false.
*       -> "" (empty sting) is false
*       -> '0n' (bigInt) is also false.
 */

/*
^   ALL TRUTHY VALUES:
*       ->  "0" is true.
*       ->  "false" (i.e false warped in a string) is true.
*       ->  " " (i.e empty string but with a space in between) => true.
*       ->  'function(){}' is a truthy value.
*       ->  {} (a scope) is a true value
*       ->  [] (a array) is a true value
*/

const arr = () => {
    console.log(`I'm a SDE in Microsoft`);
}

const convertInBool = Boolean(arr)
console.log(`A function is ${convertInBool}`);

//! USE CASES OF THESE VALUES:

//&  As we know empty array has true value we can use that info to check weather our array is empty or not.
let arr2 = []

if (arr.length === 0) {
    console.log(`Array is empty`);
}

//& Similarly we can check for objects.
let emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log(`Object is empty`);
}

//! NULL COALESCING OPERATOR. (??)
/*
* The null coalescing operator represented by '??' in code is a handy feature in some programming languages, like C# and PHP. It provides a quick way handle (null) values by allowing you to specify a default value if the first value is (null)
*/

let number = null;
let result = number ?? 10;
Console.log(result);
//^ Output will be 10 because number is null.
//^ In other case of both are not null first one will be accepted