const numbers1 = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
});
console.log(sum); // 10


// 1. Number – Sum

const numbers = [1, 2, 3];
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 6

// 2. Object – Count Occurrences

const items = ['a', 'b', 'a'];
const count = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(count); // { a: 2, b: 1 }

// 3. Array – Flatten Nested Arrays

const nested = [[1, 2], [3, 4]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // [1, 2, 3, 4]

// So yes — you choose the accumulator type based on your goal. Think of reduce() as a mini factory: you give it materials (the array), tools (your callback), and a mold (the accumulator type) — and out comes the exact shape you want. 🛠️