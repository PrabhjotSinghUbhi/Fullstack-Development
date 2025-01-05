// const result = nums.map((i) => { return i + 10 })
// console.log(result) */

const nums = [1, 2, 3, 4, 5, 6]

const result = nums
    .map((i) => i * 10)
    .filter((i) => i > 30);

console.log(result);

