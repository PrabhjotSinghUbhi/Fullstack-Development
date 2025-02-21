let score = null

console.log(`type of score is ${typeof score}`)
console.log(`value of score ${score}`)

// Parsing this null into number gives you 0.
let valueInNumber = Number(score)

// NaN --> stand for Not A Number
console.log(`After parsing the value of score in Number() type is ${typeof (valueInNumber)}`)
console.log(`Value of score in Number() Value is ${(valueInNumber)}`)

/*
    "33" ==> 33
    "43abcd" ==> NaN
    boolean ==> true -- 1 , False -- 0
*/

let isLoggedIn = ""

// Converting an empty string into a number.
let convertInNumber = Number(isLoggedIn)

// Converting an empty string into a Boolean Value.
let convertInBoolean = Boolean(isLoggedIn)

console.log(`type of Converted in Boolean value is ${typeof convertInBoolean} and value is ${convertInBoolean}`);


// 0 ==> false: 1 ==> true
// "" ==> false : "non empty string" ==> true

// ******************** OPERATIONS **************************

let value = 3
let negValue = - value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "Prabh"
let str2 = "awesome"

let str3 = str1 + " " + str2
console.log(str3);

console.log(`"1" + 2 is ${"1" + 2}`);
console.log(`1 + "2" is ${1 + "2"}`);

console.log(`1 + 2 + "2" is ${1 + 2 + "2"}`);
console.log(+"");

