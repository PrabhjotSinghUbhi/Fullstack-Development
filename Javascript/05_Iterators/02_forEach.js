const arr = ["one", "two", "three", "four", "Five"]
//! FOR IN LOOP IN JAVASCRIPT.
console.log('====================================');
for (let i in arr) {
    console.log(i);
}
console.log('====================================');

//! FOR OF LOOP IN JAVASCRIPT.
console.log('====================================');
for (let i of arr) {
    console.log(i);
}
console.log('====================================');

//! FOREACH LOOP IN JAVASCRIPT.
/*
^   The forEach method in JavaScript is used to execute a provided function once for each array element. It is often used when you want to perform an action on each item in an array without creating a new array or modifying the existing one.

*   --> i -> current value.
*   --> j -> index. (optional)
*   --> n -> Array that was called. (optional)
*/

arr.forEach(function (i, j, n) {
    console.log(i, j, n);
})

const data = [
    {
        name: "Prabhjot Singh",
        designation: "CEO"
    }
    ,
    {
        name: "Prabhjot Singh",
        designation: "CEO"
    }
    ,
    {
        name: "Prabhjot Singh",
        designation: "CEO"
    }
]

console.log(data[2])

//todo: Arrays are non primitive data types which means the even when a copy of Array is made it points to the same reference that means that when a change is made in the copy the difference is made in the array as well because they share the same reference.

let val = 54
let val2 = val
val2 = 89

console.log(val); // will print 54
console.log(val2);// will print 89

let array1 = [1, 2, 3, 4, 5];
let temp = array1;
temp[1] = 69;

console.log(array1); //& should output [1,2,3,4,5]

//& but prints [1,69,3,4,5] instead

console.log(temp); //& will output [1,69,3,4,5]