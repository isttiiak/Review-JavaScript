/**
 * map method creates a new array with the result of some operation and return.
 * map also can take a callback function and the callback function also take 3 parameter same as before.
 *  forEach is used when we have to do only some operation and map is used when we need an additional array along with the operation.
 */

let num = [1, 2, 3, 4, 5, 6];

// to see the new array with the result we can create a variable for this.
let newArray = num.map((val) => {
    console.log(val*2)
})

console.log(newArray)
