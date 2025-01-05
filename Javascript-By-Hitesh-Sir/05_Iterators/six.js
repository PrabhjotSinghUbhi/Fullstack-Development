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