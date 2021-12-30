# Scope

Global variables live until the page is discarded, like when you navigate to another page or close the window.

Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

---

---

# Self invoking function

**runs as soon as it is defined.** 

**The anonymous function is invoked right after it has been defined.** 

```
(function () {
  statements
})();
```

It is a design pattern which is also known as a **Self-Executing Anonymous Function** and contains two major parts:

* The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

* The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.


**Self-invoking functions are useful for initialization tasks**.
For example, if we have a web page in which we want to attach event listeners to DOM elements and other initialization work, self-invoking functions would be the best tool for the job!

---

# Nested function

In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.

In JavaScript, all functions have access to the scope "above" them.

Nested functions are made for convenience. It can access the outer variables and so can return a value. Nested functions are quite common in JavaScript.

## Note

When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then the more outer one and so on until the global one.

Lexical scope is the ability for a function scope to access variables from the parent scope.

---

# Closure

Declare a function inside another function. 

A nested function can be returned: either as a property of a new object or as a result by itself. It can then be used somewhere else. **No matter where, it still has access to the same outer variables.**

The inner function remembers the environment it was created in.
If we have a variable in the outer function, that increments in the inner function -> the inner function remembers

**A closure is a function having access to the parent scope even after a parent function has closed**

**Closures keep local variables alive from functions that should have destroyed them a long time ago.**

**This is yet another useful case where closures come in handy. The point here is to allow others to access values you have inside your function, without letting them directly modify the variables.**

**Remember, JavaScript still doesn’t have the concept of a private scope for attributes or methods on your classes, so simulating this might help you protect your code**

This environment consists of any local variables that were in-scope **at the time the closure was created.** 

Now when the code inside `inner()` looks for `num` variable, it first searches its own Lexical Environment (empty, as there are no local variables there), then the Lexical Environment of the outer `outer()` call, where it finds and changes it.


```javascript
function outer (){
	let num = 0;

	function inner(){
		num ++ //num = num + 1
		return `the number is ${num}`;
	}

	return inner
};

let outerFunc = outer(); 
console.log("outerfunc = ", outerFunc) //return the instance of the reference of the inner function
outerFunc(); //num = 1
console.log(outerFunc()); //num = 2
```

In this case, the outer function returns a **reference** to the instance of the inner function that is created when outer function is run. 
The instance of the inner function maintains a reference to its lexical environment, within which the variable *num* exists. For this reason, when `outerFunc()` is invoked, the variable *num* remains available for use.


[To read before interviews](https://javascript.info/closure)