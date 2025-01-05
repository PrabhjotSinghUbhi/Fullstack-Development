const arr = ["one", "two", "three", "four", "Five"]

arr.forEach(function (i, j, n) {
    // console.log(i,j,n);
})

// arr.forEach(element , i=> {
//     console.log(element , i)
// });

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

let val = 54
let val2 = val
val2 = 89

console.log(val); // will print 54
console.log(val2);// will print 89

let array1 = [1, 2, 3, 4, 5];
let temp = array1;
temp[1] = 69;

console.log(array1); // should output [1,2,3,4,5]
                    // but prints [1,69,3,4,5] instead
console.log(temp); // will output [1,69,3,4,5]
    