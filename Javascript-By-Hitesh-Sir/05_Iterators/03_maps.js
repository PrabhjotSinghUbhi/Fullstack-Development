//!     map(loop) method in javascript

/*
^   The map method creates a new array populated with the results of calling a provided function on every element in the calling array. It’s often used to transform elements in an array.

& array.map(callback(currentValue, index, array), thisArg);

    *currentValue: The current element being processed.

    *index (optional): The index of the current element being processed.

    *array (optional): The array map was called upon.

    *thisArg (optional): A value to use as this when executing the callback function.
*/

const nums = [1, 2, 3, 4, 5, 6]

const result = nums
    .map((i) => i * 10)
    .filter((i) => i > 30);

console.log(result);



