// ✅ 1. Longer version (with return and curly braces):

let result = numbers.filter(num => {
    return num % 2 === 0;
});
// This uses block body syntax.

// You must explicitly use the return statement.

// Good for writing multiple lines inside the function.




// ✅ 2. Shorter version (without return and curly braces):

let result1 = numbers.filter(num => num % 2 === 0);

// This uses concise body syntax.

// Automatically returns the result of the expression.

// Clean and short for one-liner functions.


/**
 * 🧪 When to Use What?

Use map() when you want to transform each item.

Use filter() to remove unwanted items.

Use reduce() to build something new (number, object, array).

Use flatMap() when mapping returns arrays and you want to flatten the result.

Use sort() and reverse() to reorder data.

Use slice() and splice() to extract or modify parts of the array.
 */
