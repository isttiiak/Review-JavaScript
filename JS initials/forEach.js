/**
 * array.forEach(a callback function)
 * A 'callback' is a function passed as an argument to another function.
 * Actually it is method. 
 * It is used for an Array.
 * forEach() is called Higher order Function/Method (which function take another function as a parameter or return a function)
 *  In JavaScript in a function a parameter can be another function.
 * Generally the forEach method can take 3 parameter. a callback function, index and the array itself like, arr.forEach(num, idx, arr)
 */

// definition of forEach

let arr = [1, 2, 3, 4, 5]
// basic way to define a forEach method
// arr.forEach(function printArray(num) {
//     console.log(num);
// })

// with arrow function and this is the preferred way.
arr.forEach((num, idx) => {
    console.log(num, idx);
})


// using forEach loop to do square of an array

let numArray = [2, 4, 6, 8, 10];

numArray.forEach((num) => {
    console.log(`The square of ${num} is ${num*num}`)
})