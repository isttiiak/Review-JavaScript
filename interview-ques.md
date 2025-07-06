## 🔍 Interview Questions and Answers

### 1. What is the difference between `var`, `let`, and `const`?

| Feature    | `var`                  | `let`                     | `const`                   |
| ---------- | ---------------------- | ------------------------- | ------------------------- |
| Scope      | Function-scoped        | Block-scoped              | Block-scoped              |
| Redeclare  | Allowed                | Not allowed               | Not allowed               |
| Reassign   | Allowed                | Allowed                   | Not allowed               |
| Hoisting   | Yes (with `undefined`) | Yes (but not initialized) | Yes (but not initialized) |
| Use Today? | ❌ Avoid                | ✅ Use it                  | ✅ Use it (for constants)  |

### 2. What are the primitive and non-primitive data types in JavaScript?

* **Primitive:** `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol`
* **Non-Primitive:** `object`, `array`, `function`

> Primitive types are immutable and stored by value. Non-primitive types are mutable and stored by reference.

### 3. What is the difference between `null` and `undefined`?

* `null`: You intentionally set a variable to have no value.
* `undefined`: A variable that is declared but not assigned any value.

### 4. What is the difference between `==` and `===`?

* `==`: Loose comparison (type coercion).
* `===`: Strict comparison (no coercion, checks value and type).

> Always use `===` to avoid unexpected type conversion.

### 5. What is a ternary operator?

A short form of `if...else`:

```js
let result = condition ? "Value if true" : "Value if false";
```

### 6. What are the types of loops in JavaScript?

* `for`
* `while`
* `do...while`
* `for...in` (loop over object keys)
* `for...of` (loop over iterable values)

### 7. What are the different ways to declare a function?

* Function Declaration
* Function Expression
* Arrow Function

### 8. What is a method inside an object?

A method is a function that belongs to an object:

```js
const user = {
  name: "Istiak",
  greet() {
    return `Hi, I’m ${this.name}`;
  }
};
```

### 9. What can be stored inside an array?

* Strings, numbers, booleans
* Objects
* Functions
* Nested arrays

### 10. What is the difference between objects and arrays?

| Feature   | Object                    | Array                       |
| --------- | ------------------------- | --------------------------- |
| Structure | Key-value pairs           | Ordered list of values      |
| Syntax    | `{ key: value }`          | `[value1, value2]`          |
| Access    | `obj.key` or `obj['key']` | `arr[0]`                    |
| Use Case  | Descriptive data          | List or collection of items |

---

**Bonus: Interview Prep Tips**

* Practice coding with real examples.
* Explain each concept in your own words.
* Build small projects or snippets with these features.
* Keep a cheat sheet (like this) to revise quickly.
