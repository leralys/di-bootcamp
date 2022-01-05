# Async

An async function is a function declared with the `async` keyword, and the `await` keyword is permitted within them. 

The async and await keywords enable **asynchronous, promise-based behavior** to be written in a **cleaner style, avoiding the need to explicitly configure promise chains**.

```
async function name([param[, param[, ...param]]]) {
   statements
}
```

Return value of the `async` function

A **Promise** which will be resolved with the value returned by the `async` function, or rejected with an exception thrown from, or uncaught within, the async function.

---

# Async

* When no return statement defined, or a return statement without a value, it returns a resolving promise, equivalent to return Promise.Resolve() .

* When a return statement is defined with a value, it will return a resolving promise with the given return value, equivalent to return Promise.Resolve("My return String")

* When an error is thrown, a rejected promised will be returned with the thrown error, equivalent to return Promise.Reject(error) .


---

# Async Await

There’s a special syntax you can use in JavaScript that makes working with promises easier. It's called “async/await", 

An `async` function is a function that knows to expect the possibility that you'll use the `await` keyword to invoke asynchronous code.

The async keyword is added to functions to tell them to return a promise rather than directly returning the value.

```
let value = await promise;
```

**The keyword `await` makes JavaScript wait until that promise settles and returns its result**.

`await` literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

It’s just a more elegant syntax of getting the promise result than `promise.then`. And, it’s easier to read and write.

**Await :  returns the result of the promise.**

For example:

```javascript
async function foo() {
   await 1
}
```

...is equivalent to:

```javascript
function foo() {
   return Promise.resolve(1).then(() => undefined)
}
```

---

# Notes

JavaScript evolved in a very short time from callbacks to promises (ES2015), and since ES2017 asynchronous JavaScript is even simpler with the async/await syntax.

async/await is built on promises.

**They make the code look like it's synchronous, but it's asynchronous and non-blocking behind the scenes.**

Syntax sugar : new functionality but no new notions

---


# Error Handling

When we use async/await, we rarely need .then, because await handles the waiting for us. And we can use a regular try..catch instead of .catch. That’s usually (but not always) more convenient.


A more compact way to handle errors when using fetch() with async and await.

The trick starts by wrapping our fetch() method in parentheses (()), and calling the catch() method directly on it. To keep our code DRY, we’ll pass a named handleError() callback function into the catch() method.

```
var getPost = async function () {

   // Get the post data
   var post = await (fetch('https://jsonplaceholder.typicode.com/posts/5').catch(handleError));

   // Get the author
   var author = await (fetch('https://jsonplaceholder.typicode.com/users/' + post.userId).catch(handleError));

   console.log(post, author);

};

getPost();
```


```
var getPost = async function () {

   // Get the post data
   var post = await (await fetch('https://jsonplaceholder.typicode.com/posts/5').catch(handleError)).json();

   // Get the author
   var author = await (await fetch('https://jsonplaceholder.typicode.com/users/' + post.userId).catch(handleError)).json();

   console.log(post, author);

};

getPost();
```

Finally, after each call, we’ll check to see if the returned data has a code property with a value of 400.

If it does, there was an error and we won’t more forward. Otherwise, we’re good to go.


```
var getPost = async function () {

   // Get the post data
   var post = await (await fetch('https://jsonplaceholder.typicode.com/posts/5').catch(handleError)).json();
   if (post.code && post.code === 400) return;

   // Get the author
   var author = await (await fetch('https://jsonplaceholder.typicode.com/users/' + post.userId).catch(handleError)).json();
   if (author.code && author.code === 400) return;

   console.log(post, author);

};

getPost();
```

---


# Promise.all()

`Promise.all()` comes in handy when we want to call multiple API's.

Using a traditional await method, we have to wait for each request to complete before going on to the next request. This becomes a problem when each request takes some time to complete. This can easily add up and slow things down.

Using `Promise.all()`, we can call each of these API's in parallel.

---

## Promise.all

Because async functions are Promises under the hood, we can run both asyncThing1() and asyncThing2() in parallel by calling them without await. Then we can use await and Promise.all, which returns an array of results once all Promises have completed.

This allows the Promises to run in parallel again, but still gives us a pleasant-to-use syntax that avoids chaining and lets us treat the values in our Promises as standard return values.

```
// 🚫 don’t do this in your real code; it’s slow!
async function doThings() {
  const thing1 = await asyncThing1();
  console.log(thing1);

  const thing2 = await asyncThing2();
  console.log(thing2);
}

doThings();
```

```
// ✅ do this — async code is run in parallel!
async function doThings() {
  const p1 = asyncThing1();
  const p2 = asyncThing2();

  const [thing1, thing2] = await Promise.all([p1, p2]);

  console.log(thing1);
  console.log(thing2);
}

doThings();
```

TO READ : https://www.learnwithjason.dev/blog/keep-async-await-from-blocking-execution

TO SEE: https://www.youtube.com/watch?v=vn3tm0quoqE