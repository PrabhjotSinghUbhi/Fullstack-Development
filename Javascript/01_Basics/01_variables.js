const truth = "Sun rises in the east"
let mentor = "Hitesh"
var student = "Prabhjot Singh"
course = "Javascript"

// Using let is generally considered method for initializing variables.
console.log(mentor);

// Using var is not generally a good practice.
console.log(student);

// This is the worst method to initialize variables.
console.log(course);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

let java = [truth, mentor, student, course]

console.log(java);


