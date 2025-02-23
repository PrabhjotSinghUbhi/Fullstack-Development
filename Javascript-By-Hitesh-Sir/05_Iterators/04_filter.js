//! filter method

/*
^ The filter method in JavaScript is used to create a new array with all elements that pass a test implemented by a provided function. It’s commonly used for selecting a subset of items from an array based on a condition.
 */


coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach(Element => {
    // console.log(Element)
    // return Element; 
});
// console.log(values)

// for each loop doesn't return anything even if you want it or not.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// making a call back.
// const myFavNUms = myNums.filter((num) => num > 4)
const myFavNUms = myNums.filter((i) => {
    return i > 5
})

console.log(myFavNUms);



