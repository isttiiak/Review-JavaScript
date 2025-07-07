let num = [1,2,3,4,5,6,7,8,9,10,11,22];

const doubleNum = num.map((val) => {
    return val*2;
})

// console.log(doubleNum);

// we can write this with more compact way in one line.

const dNum = num.map(val => val*2)
console.log(dNum);

// The original array remains same
console.log(num);