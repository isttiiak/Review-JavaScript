/**
 * reduce array method performs some operation and reduces the array to a single value. And it the that single value. 
 * When we nee to perform an operation and need a single value rather than an array then we can use it.
 * 
 * The first element of an array called the result(accumulator) and the current value is the next one.
 * 
 * it takes 4 argument .reduce((accumulator, currentValue, index, array)
 */

// sum 

let num = [1, 2, 3, 4, 5];

const finalResult = num.reduce((result, currVal, idx) => {
    // return result + currVal; // sum of an array
    return result > currVal ? result : currVal; // Greatest element of an array
})

console.log(finalResult); // sum = 15 