/*
what is a javascript objects?
-> A javascript objects is a entity having a state and a behavior (properties and methods).
*/

/*
-> Js objects have a special property called prototype.
*/

const student = {
    fullName: "Prabhjot Singh",
    marks: 33,
    printMarks: function () {
        console.log(`marks of ${this.fullName} are ${this.marks}`); //this keyword refers to the current context in this case this refers to the current object.
    }
}

// prototype is a object, so it is object inside of a object having many states and methods that are by default

//for eg if you write :
student.printMarks() //output: marks of Prabhjot Singh are 33.

// but if you write student.abc() this will give a type error because this method is not defined by me in the object.

// but id you use a method like 
let temp = student.valueOf()
// console.log(temp);

// the valueOf method is not written by me but i can use it because it is defined in prototype.

/**                
                  
 * what if I write a object Karan an employee of a company and it has a salary of 50,000 and it has a function calcTax() which says that his tax is 20%.

 * if there is a another employee of the same company Arjun and salary is 60,000 do i need to write the function again because tax will be same.

 * thats were the concept of prototype comes in.

 * just set the Karan object as a prototype of Arjun and the same methods of Karan will be inherited by Arjun.
 
 */

const Karan = {
    salary: 50000,
    calcTax() {
        console.log("tax is 10%.");
    }
}

const Arjun = {
    salary: 60000
}

// Arjun.__proto__ = Karan // this way to set prototype of is deprecated in javascript.
Object.setPrototypeOf(Arjun, Karan) // this is the newer way to set prototype.

console.log(Arjun.calcTax());   
