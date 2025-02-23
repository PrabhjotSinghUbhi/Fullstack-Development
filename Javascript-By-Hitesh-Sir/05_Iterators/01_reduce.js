//! THE REDUCE METHOD

//? An array of objects.
const courses = [
    {
        item: "data science",
        price: 1000
    },
    {
        item: "Machine Learning",
        price: 4000
    },
    {
        item: "Computer science",
        price: 2000
    }
]

/*
    ^   The reduce method is commonly used in shoping methods:
    *   ->  The reduce method in JavaScript is a powerful array method that transforms an array into a single value by applying a reducer function to each element in the array (from left to right).
    &   ->  The reducer function takes four arguments:
    ?           Accumulator(acc)
    ?           Current Value(curr)
    ?           Current Index(idx)
    ?           Array(src)(optional)
*/

//^  0 is the initial value of the accumulator.
let priceToPay = courses.reduce((acc, items) => (items.price + acc), 0)
console.log(priceToPay)