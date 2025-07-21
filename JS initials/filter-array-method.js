/**
 * creates a new element of element that gives true for the condition or filter
 * 
 */

let num = [1, 2, 3, 4, 5, 6, 7, 8];

const result = num.filter((val) => {
    return val % 2 === 0;
})

console.log(result);