/* 
    *Arrays in javascript.
        ! Arrays are resizable in javascript.
        ! One array can store value of multiple datatypes.
        ! arrays make shallow copies.
*/

let arr = new Array(1, 2, 3, 4, 5)

/*
    * Shallow Copies = Those variables / Objects that point to the same reference.
    * Deep Copies = Those variables / Objects that do not point to the same reference.
*/

/*
    *Some Methods of Arrays:- 
        ! arr.push(num) --> Used to add a element in the array at the end.
        ! arr.pop() --> Removes the last element of the array.
        ! arr.unshift(num) --> adds a element to start a element.
        ! arr.shift() --> removes a element from start of the element.
        ! arr.includes(num) --> 1. Checks weather the number is present in the arr or the not?
        !                   --> 2.  Returns a boolean value.

        ! arr.indexof(num) --> returns the index of a num.
        ! arr.join(Array) --> 1. returns an Array without the square brackets.
        !                     2. Converts the Array(Object). 

        ! arr.splice(from.index, to.index) && arr.slice(from.index, to.index) --> creates a subarray.
*/

console.log(arr.splice(1, 2));