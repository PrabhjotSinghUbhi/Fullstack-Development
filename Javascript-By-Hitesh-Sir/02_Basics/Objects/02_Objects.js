//^ Nested Objects.
let regular = {
    name: {
        fullName: {
            name1: "prabh",
            name2: "prince",
            name3: "jot"
        },
        lastName: {
            surname1: "Singh",
            surname2: "Ubhi",
            surname3: "Ramgharia"
        }
    }
}
// console.log(regular.name.fullName.name1);

//? Creating a Object with a key and Value.
const Karen = {
    occupation: "Doctor"
}

//? Accessing the value through its key.
// console.log(Karen.occupation)

/*
!   DESTRUCTURING IN JAVASCRIPT.
^       -> IT IS A WAY TO EXTRACT VALUES FROM THE ARRAY OR THE OBJECT AND STORE THEM IN A VARIABLE IN A SHORTER AND READABLE FORMAT.

const info = {
    name : "Prabhjot Singh",
    Role : "SDE"
    }

?       > NORMAL METHOD TO ACCESS THINGS
            temp = info.name;
            temp2 = info.Role;

?       > NOW THE DESTRUCTURING WAY
            const {name , Role} = person;
            name;
            Role;
&            NAME AND ROLE DO NOT REQUIRE THE DOT OPERATOR NOW.
 */

//? Object destructuring is happening
const { occupation } = Karen;
// console.log(occupation)

//? The value of occupation is stored in job variables.
const { occupation: job } = Karen;
console.log(job)

console.log(Karen)