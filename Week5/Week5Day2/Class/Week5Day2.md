# Synchronous

**JavaScript is single threaded**

A thread represents how many parts of programs can you execute independently and at the same time. The easiest way to find whether a language is single threaded or multithreaded is by knowing how many call stacks it has. JS has one, so it is a single threaded language.

**One line at a time**

```javascript
console.log("1");
console.log("2"); //cannot execute before "1"
console.log("3"); //cannot execute before "2"
```


An action like requesting data from an API can take an indeterminate amount of time, depending on the size of data being requested, the speed of the network connection, and other factors. If API calls were performed in a synchronous manner, the browser would not be able to handle any user input, like scrolling or clicking a button, until that operation completes. This is known as blocking.

=> To get around this problem, we need <u>a way to do tasks asynchronously</u> even though we have a single thread. This is where the **event loop** comes handy.

=> Show the "callstack" in debugging

---

# Asynchronous

Asynchronicity means that if JavaScript has to wait for an operation to complete, it will execute the rest of the code while waiting.

<u>Asynchronous programming is a means of parallel programming in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure or progress.</u>

**Start something now -> finish it later**

In order to prevent blocking behavior, the browser environment has many Web APIs that JavaScript can access that are asynchronous, meaning they can run in parallel with other operations instead of sequentially. This is useful because it allows the user to continue using the browser normally while the asynchronous operations are being processed.

---

## Callbacks

A callback is a function passed as an **argument** to another function.

**Async callbacks**

the callback is the most fundamental async pattern in the JavaScript language

Async callbacks are functions that are specified as arguments when calling a function which will start executing code in the background. When the background code finishes running, it calls the callback.

**When you use callbacks to continue code execution after asynchronous operations, these callbacks are called asynchronous callbacks.**

---

## Benefits of Asynchronous programming

The main benefits one can gain from using asynchronous programming are **improved application performance and responsiveness**. One particularly well suited application for the asynchronous pattern is providing a responsive UI in a client application while running a computationally or resource expensive operation.

**WebAPI: run the code in a different part of the browser so the stack can continue running
--> NON BLOCKING**

---

## Example

<u>Definition</u>: **call stack** =>  stacks the calls (of functions in our case)


## Example with SetInterval

```
setTimeout(() => {console.log("this is the first message")}, 5000);
setTimeout(() => {console.log("this is the second message")}, 3000);
setTimeout(() => {console.log("this is the third message")}, 1000);

  // Output:

  // this is the third message
  // this is the second message
  // this is the first message

```

Notice that the first function does not create a 5-second "pause" before calling the second function. 
Instead, :

* the first function is called, but waits 5 seconds to execute. 

* While the first function is waiting to execute, the second function is called, and a 3-second wait is applied to the second function before it executes. 

* Since neither the first nor the second function's timers have completed, the third function is called and completes its execution first. 
Then the second follows. 
Then finally the first function is executed after its timer finally completes.

Demo [here](http://latentflip.com/loupe/?code=c2V0VGltZW91dCgNCiAgICBmdW5jdGlvbiAoKSB7DQogICAgICAgIGNvbnNvbGUubG9nKCJ0aGlzIGlzIHRoZSBmaXJzdCBtZXNzYWdlIikNCiAgICB9DQosIDUwMDApOw0KDQoNCnNldFRpbWVvdXQoDQogICAgZnVuY3Rpb24gKCkgew0KICAgICAgICBjb25zb2xlLmxvZygidGhpcyBpcyB0aGUgc2Vjb25kIG1lc3NhZ2UiKQ0KICAgIH0NCiwgMzAwMCk7DQogICAgDQpzZXRUaW1lb3V0KA0KICAgIGZ1bmN0aW9uICgpIHsNCiAgICAgICAgY29uc29sZS5sb2coInRoaXMgaXMgdGhlIHRoaXJkIG1lc3NhZ2UiKQ0KICAgIH0NCiwgMTAwMCk7DQo%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

---

## Element of the web browser

The web browser also has other components, not just the JavaScript engine.

<u>Event loop:</u> The event loop is a constantly running process that monitors both the callback queue and the call stack.

* If the call stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack

* If the call stack **is not empty**, the event loop waits until it is empty and places the next function from the callback queue to the call stack. 

List of webapis: https://developer.mozilla.org/en-US/docs/Web/API

With the DOM : http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIGNvbnNvbGUubG9nKCdZb3UgY2xpY2tlZCB0aGUgYnV0dG9uIScpOyAgICAKfSk7Cgpjb25zb2xlLmxvZygiSGkhIik7Cgpjb25zb2xlLmxvZygiV2VsY29tZSB0byBsb3VwZS4iKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

---

# AJAX

**Asynchronous JavaScript and XML**, while not a technology in itself, is a term coined in 2005 by Jesse James Garrett, that describes a "new" approach to using a number of existing technologies together, including HTML or XHTML, CSS, JavaScript, DOM, XML, XSLT, and most importantly the **XMLHttpRequest** object.

When these technologies are combined in the **Ajax model**, web applications are able to make quick, incremental updates to the user interface **without reloading the entire browser page**. This makes the application faster and more responsive to user actions.

Although X in Ajax stands for XML, JSON is used more than XML nowadays because of its many advantages such as being lighter and a part of JavaScript. Both JSON and XML are used for packaging information in the Ajax model.

**Ajax is just a means of loading data from the server and selectively updating parts of a web page without reloading the whole page.**

In a nutshell, **it is the use of the XMLHttpRequest object to communicate with servers**

---

## Why AJAX

AJAX is a developer's dream, because you can:

1. Read data from a web server - after the page has loaded

2. Update a web page without reloading the page

3. Send data to a web server - in the background

---

## XMLHttpRequest

Basically, what Ajax does is make use of the browser's built-in `XMLHttpRequest` (XHR) object to **send and receive information to and from a web server asynchronously**, in the background, **without blocking the page** or interfering with the user's experience.

To perform Ajax communication JavaScript uses a special object built into the **browser —
a XMLHttpRequest (XHR)** object—to make HTTP requests to the server and receive data in response.

All modern browsers (Chrome, Firefox, IE7+, Safari, Opera) support the XMLHttpRequest object

---

## Why XMLHttpRequest

### Details

`XMLHttpRequest` is a built-in browser object that allows to make HTTP requests in JavaScript.

In modern web-development XMLHttpRequest is used for three reasons:

1. Historical reasons: we need to support existing scripts with XMLHttpRequest.

2. We need to support old browsers, and don’t want polyfills (e.g. to keep scripts tiny).

3. We need something that fetch can’t do yet, e.g. to track upload progress

**[See more HERE](https://attacomsian.com/blog/xhr-monitor-progress)**

---

## Events

## Most used events

Listen to xhr events for response.

These three events are the most widely used:

1. load – when the request is complete (even if HTTP status is like 400 or 500), and the response is fully downloaded.

2. error – when the request couldn’t be made, e.g. network down or invalid URL.
It's important to note that this is only called if there's an error at the network level. If the error only exists at the application level (e.g. an HTTP error code is sent), this method will not be called.

3. progress – triggers periodically while the response is being downloaded, reports how much has been downloaded.

## Ready states

`XMLHttpRequest` changes between states as it progresses. The current state is accessible as `xhr.readyState`.

All states, as in the specification:

```
UNSENT = 0; // initial state
OPENED = 1; // open called
HEADERS_RECEIVED = 2; // response headers received
LOADING = 3; // response is loading (a data packet is received)
DONE = 4; // request complete
```

---

# API

See video https://www.youtube.com/watch?v=7YcW25PHnAA 