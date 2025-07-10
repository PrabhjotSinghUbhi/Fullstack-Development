// as we know that arrays and javascript objects are pass by reference so changes made in the copies reflects on the actual object.

// solution to this is making shallow copies instead of normal copies using the spread operator(...).

// let arr = [1, 2, 3, 4]
// let copy = arr

// copy[0] = 33

// console.log(arr, copy); //[ 33, 2, 3, 4 ] [ 33, 2, 3, 4 ]

// let obj = {
//     name: "Prabhjot Singh"
// }

// let copyObj = obj
// copyObj.name = "Prince"

// console.log(obj.name, copyObj.name); // Prince Prince

// now using the spread operator.
let arr = [1, 2, 3, 4]
let copy = [...arr]

copy[0] = 33

console.log(arr, copy); //[ 1, 2, 3, 4 ] [ 33, 2, 3, 4 ] no change in the original array.

let obj = {
    name: "Prabhjot Singh",
    password: ",.i^Isc7ia(e"
}

let copyObj = { ...obj, name: "Gurkirat Singh" } //  changes only the name property and keeps and rest of the project as it is.
console.log(obj, copyObj); // { name: 'Prabhjot Singh', password: ',.i^Isc7ia(e' } { name: 'Gurkirat Singh', password: ',.i^Isc7ia(e' }

