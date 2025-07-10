// Here we are going to talk about the numbers and some Math in javascript

const score = 400
console.log(score)

//Creating a object of Number.
const balance = new Number(100)
console.log(balance);

/* By Using .tostring() function we can convert the Number into a String then we can use the function that are applicable for strings.*/
console.log(balance.toString().length)

/*
^    Most common functions used at Production level are:-
?        1. .toFixed(num) similar to %.4lf in c.
?        2. .toPrecision() similar to Math.round() in java.
?        3. .toLocaleString() adds comma to number. eg 1000000 -> 1,000,000
 */

console.log(score.toFixed(2))

let random_no = 23.4654
console.log(random_no.toPrecision(4));

let million = 1000000;
console.log(million.toLocaleString());

/* +++++++++++++++++++Math++++++++++++++++++++++++++++++++ */

/*
^     Math library is integrated in javascript.
^        1. Math.abs(num) --> Used to convert negative number into positive.
^        2. Math.round(num) --> Rounds the Number.
^        3. Math.ceil(num) --> smallest integer greater than or equal to num.
^        4. Math.floor(num) --> largest integer less than or equal to num.
^        5. Math.min(a, b) --> finds minimum of a and b.
^        6. Math.max(a, b) --> finds maximum of a and b.
*/

console.log(Math.abs(-90));

/*
!    Random Numbers:-
!        We use Math.random() along with Math.floor property.
!        To make the Range we define min and max:
!            After that we define it in such range: (((Math.random()*(max-min)) + 1) + min)
*/

console.log(Math.floor((Math.random() * 10) + 1) + 1);


