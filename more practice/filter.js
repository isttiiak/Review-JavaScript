// filter array method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let result = numbers.filter(num => {
    return num % 2 === 0;
})

// let result = numbers.filter(num => num % 2 === 0);

console.log(result)