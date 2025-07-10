// Here we are going to talk about dates and times in javascript.

// Syntax:
//Making a object of date
let myDate = new Date

/*
    Now , Various functions can be used on this object:-
        1. myDate.toString();
        2. myDate.toDateString();
        3. myDate.toLocaleString();
 */
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// Date is a object.

/*
    What if I wanted to create my own date:-
        - create a object of date in this formats-
            * let myCreatedDate = new Date("01-14-2023")*
            * let myCreatedDate = new Date("2023-01-14")*
            * let myCreatedDate = new Date(2023,0,23)*
            * let myCreatedDate = new Date(2023,0,23 , 5 , 3)* This will also contain time.
 */

/*
    Creating a Time-Stamp in java script is useful in apps like quizzes , in clone apps like airbnb to track the booking time.
 */

let myTimeStamp = Date.now()

console.log(myTimeStamp.getTime());