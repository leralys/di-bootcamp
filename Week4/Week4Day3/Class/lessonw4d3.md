# Map

The `map()` method **creates a new array** populated with the results of calling a provided function on every element in the calling array

```javascript
map((element, index, array) => { ... } )
map(function callbackFn(element, index, array){ ... })
```

The `map()` method allows you to iterate over an array and modify its elements using a callback function. The callback function will then be executed on each of the array's elements.

Each time the callback function executes, the **returned value is added** to the new array.

<u>The return value of the map method:</u>
A new array with each element being the result of the callback function.

`map()` is a **non-mutating** method that creates a new array as opposed to mutating methods, which only make changes to the calling array.

<u>Difference with for each :</u> The forEach() method executes a provided function once for each element in an array. After executing the function for every array element, this method changes the values of the existing array elements according to the result of the provided function. Hence forEach() is a mutator method. Also, forEach method doesn’t return anything (undefined).

---

# Filter

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

If the callback function returns true, it includes the element in the return array.

**Conditionaly return certain element from the array to a new array**

```javascript
filter(function callbackFn(element, index, array){ ... })
```

filter() calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a value that coerces to true.

Array elements which do not pass the callbackFn test **are skipped**, and are **not included in the new array**.

<u>The return value of the filter method</u>
A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

---

# Reduce

The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

**=> reducing an array to a value.**

Reducing an array meaning performing a concrete accumulative operation on its items to calculate a result value.

```javascript
reduce(function callbackFn(accumulator, currentValue, index, array){ ... })

reduce(function callbackFn(accumulator, currentValue, index, array) { ... }, initialValue)
```

Accumulator : accumulate the value of each callback

Parameters

- callbackFn
  A function to execute on each element in the array (except for the first, if no initialValue is supplied).

  It takes four arguments:

- accumulator
  The accumulator accumulates callbackFn's return values. It is the accumulated value previously returned in the last invocation of the callback—or initialValue, if it was supplied (see below).
- currentValue
  The current element being processed in the array.
- index Optional
  The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided. Otherwise, it starts from index 1.
- array Optional The array reduce() was called upon.
- initialValue Optional
  A value to use as the first argument to the first call of the callbackFn. If no initialValue is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue.

---

# Destructuring

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

---

# Rest Parameter

The new (…) operator that was added in ES6 can be used in destructuring.

If the (…) operator appear on the left-hand side in destructuring then it is a REST PARAMETER. A Rest parameter is used to **map all the remaining elements** in the array that have not been mapped to the rest variable itself.
It is like **gathering what is left behind**. The Rest variable **must always be the last otherwise a SyntaxError is thrown**.

---

# Spread operator

In JavaScript, spread syntax refers to the use of an ellipsis of three dots (…) to expand an iterable object into the list of arguments.

In ES6, you use the spread operator (...) to unpack elements of an array

If the (…) operator appears on the right-hand in destructuring then it is a SPREAD SYNTAX. It takes all the other elements in the array which have no variable mapped to them and then maps it to the rest variable.

---

## Clone

<u>Goal:</u> to clone an object or merge objects into one.

```javascript
let colors = ["red", "green", "blue"];
let rgb = [...colors];
console.log(rgb);
```

In this example, the spread operator (...) unpacks elements of the colors array and places them in a new array rgb

---

## Merge

The spread operator (...) can be used to merge two or more arrays into one

```javascript
let rgb = ["red", "green", "blue"];
let cmyk = ["cyan", "magenta", "yellow", "black"];
let merge = [...rgb, ...cmyk];
console.log(merge);
```

---

# Rest parameter

The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,

The rest parameter collects all remaining arguments of a function into an array. The rest parameters **must be the last arguments of a function**.
The dots literally mean “gather the remaining parameters into an array”.

```javascript
function f(a, b, ...args) {
  console.log(args);
}

f(1, 2, 3, 4, 5);
```

Here are the main differences:
_ The spread operator unpacks elements.
_ The rest parameter packs elements into an array.

---

# Chaining array methods

Because the filter() method returns an a new array, you can chain the result with other iterative methods such as sort() and map().

[Beware of chaining array methods](https://www.freecodecamp.org/news/beware-of-chaining-array-methods-in-javascript-ef3983b60fbc/)
