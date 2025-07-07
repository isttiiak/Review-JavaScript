// 1. find() – Get the First Match
// Returns the first element that satisfies a condition.

// Stops searching once it finds a match.


const users = [{id: 1}, {id: 2}, {id: 3}];
const user = users.find(u => u.id === 2);
console.log(user); // { id: 2 }
//  Use when you want the actual item, not just its index.

//  2. findIndex() – Get the Index of the First Match
// Like find(), but returns the index instead of the item.


const numbers = [10, 20, 30];
const index = numbers.findIndex((n) => n > 15);
console.log(index); // 1
//  Use when you need to modify or remove the item by index.

//  3. findLast() and findLastIndex() (ES2023+)
// Work like find() and findIndex(), but search from the end of the array.


const nums = [5, 10, 15, 10];
const last = nums.findLast(n => n === 10);
console.log(last); // 10
//  Great for finding the most recent match in a list.

//  4. includes() – Check for Existence
// Returns true if the array contains a specific value.


const tags = ['js', 'html', 'css'];
console.log(tags.includes('html')); // true
//  Use for simple value checks (primitives only, not objects).

//  5. indexOf() and lastIndexOf()
// Return the first or last index of a value.

// Return -1 if not found.


const letters = ['a', 'b', 'a'];
console.log(letters.indexOf('a')); // 0
console.log(letters.lastIndexOf('a')); // 2
// Use when you want to find duplicates or track positions.

// 6. some() – At Least One Match?
// Returns true if any element passes the test.

const scores = [40, 60, 90];
console.log(scores.some(score => score > 80)); // true
// Use for quick checks like “Is there any failing grade?”

//  7. every() – Do All Match?
// Returns true only if all elements pass the test.

const scores1 = [80, 85, 90];
console.log(scores.every(score => score >= 80)); // true
// Use for validation like “Are all users verified?”