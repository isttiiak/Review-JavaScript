# JavaScript Basics Notes (Up to Array Methods)

## 1. Variables in JavaScript

### Declaration Keywords:

* **var**

  * Function-scoped.
  * Can be redeclared and updated.
  * Hoisted (but initialized as `undefined`).

  * Block-scoped.
  * Can be updated but not redeclared in the same scope.
  * Hoisted but not initialized.

* **const**

  * Block-scoped.
  * Cannot be updated or redeclared.
  * Must be initialized at declaration.
  * For objects/arrays, the reference is constant, but internal values can change.

## 2. Data Types

### Primitive Types:

* **String**: "Hello"
* **Number**: 42, 3.14
* **Boolean**: true, false
* **null**: Intentional absence of value.
* **undefined**: Variable declared but not assigned.
* **BigInt**: Large integers (`123456789123456789n`)
* **Symbol**: Unique and immutable identifier.

### Non-Primitive Types:

* **Object**: Collection of key-value pairs.
* **Array**: Ordered list (actually a type of object).
* **Function**: First-class citizens in JS (can be assigned to variables, passed, returned).

### `null` vs `undefined`:

* **null**: You set it explicitly when a variable should hold no value.
* **undefined**: Automatically assigned when you declare a variable without assigning it a value.

## 3. Operators

### Arithmetic:

* `+`, `-`, `*`, `/`, `%`, `**`

### Assignment:

* `=`, `+=`, `-=`, `*=`, etc.

### Comparison:

* `==`: Loose equality (performs type coercion).
* `===`: Strict equality (compares value and type).

**Use `===`** to avoid unexpected type conversions.

```js
10 == "10" // true
10 === "10" // false
```

### Logical:

* `&&` (AND), `||` (OR), `!` (NOT)

## 4. Conditional Statements

```js
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### Ternary Operator:

Shorthand for if-else:

```js
let message = age >= 18 ? "Adult" : "Minor";
```

## 5. Loops

### For Loop:

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### While Loop:

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### Do-While Loop:

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

## 6. Functions

### Function Declaration:

```js
function greet(name) {
  return "Hello, " + name;
}
```

* Hoisted (can be called before defined)

### Function Expression:

```js
const greet = function(name) {
  return "Hi, " + name;
};
```

* Not hoisted

### Arrow Function:

```js
const greet = (name) => {
  return `Hey, ${name}`;
};
```

* Shorter syntax
* Does not have its own `this` (inherits from parent scope)
* Great for callbacks

### Differences:

* Declarations are hoisted; expressions and arrows are not.
* Arrow functions can't be used as constructors.
* Arrow functions don’t have `arguments` object or their own `this`.

## 7. Objects

An object is a collection of key-value pairs.

```js
const user = {
  name: "Istiak",
  age: 22,
  isActive: true,
  greet() {
    return `Hi, I’m ${this.name}`;
  }
};
```

### Method Syntax in Objects

There are two main ways to define a function inside an object (method):

**Shorthand Syntax (modern and preferred):**

```js
const obj = {
  sayHi() {
    console.log("Hello!");
  }
};
```

**Traditional Syntax:**

```js
const obj = {
  sayHi: function() {
    console.log("Hello!");
  }
};
```

Both are valid. The shorthand was introduced in ES6.

### What can be inside an object?

* Strings, numbers, booleans
* Arrays
* Functions (methods)
* Other objects (nested)

## 8. Arrays

An array is an ordered list of values.

```js
const fruits = ["apple", "banana", "mango"];
```

### What can be inside an array?

* Strings, numbers, booleans
* Objects
* Functions
* Other arrays (nested arrays)

Access by index:

```js
console.log(fruits[0]); // "apple"
```

Length:

```js
console.log(fruits.length); // 3
```

---

✅ You’re now ready to start **Array Methods** like `push`, `pop`, `map`, `filter`, and more!
Let me know when to begin.

---

