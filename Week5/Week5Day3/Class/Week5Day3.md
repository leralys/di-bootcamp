# Promise object

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

Since JavaScript code runs in a non-blocking manner, promises become essential when we have to wait for some asynchronous operation without holding back the execution of the rest of the code.

---

# Promise states

A Promise is an object. There are 3 states of the Promise object:

* Pending: Initial State, before the Promise succeeds or fails

* Resolved: Completed Promise

* Rejected: Failed Promise


For example, 

* when we request data from the server by using a Promise, it will be in pending mode until we receive our data.

* If we achieve to get the information from the server, the Promise will be resolved successfully. 

* But if we don’t get the information, then the Promise will be in the rejected state.

**Syntax**

```
const myPromise = new Promise((resolve, reject) => {  
    let condition;  
    
    if(condition is met) {    
        resolve('Promise is resolved successfully.');  
    } else {    
        reject('Promise is rejected');  
    }
});

```

---

# Asynchronous operations

In JavaScript, a promise is an object that returns a value which you hope to receive in the future, but not now.

Because the value will be returned by the promise in the future, the promise is very well-suited for handling asynchronous operations.

A promise starts in the pending state which indicates that the promise hasn’t completed. It ends with either fulfilled (successful) or rejected (failed) state.

---

# Promise constructor

```javascript
new Promise(executor)
```

**executor** : A **function** to be executed by the constructor, during the process of constructing the new Promise object. The executor is custom code that ties an outcome to a promise.

```javascript
function(resolutionFunc, rejectionFunc){
      // typically, some asynchronous operation.
}
```

`resolutionFunc` and `rejectionFunc` are also functions, and you can give them whatever actual names you want. Their signatures are simple: they accept a single parameter of any type.

```javascript
resolutionFunc(value) // call on resolved
rejectionFunc(reason) // call on rejected
```

---

# Creating a new Promise

A Promise object is created using the new keyword and its constructor. 

This constructor takes a function, called the "executor function", as its parameter. 

This function should take two functions as parameters. 

* The first of these functions (resolve) is called when the asynchronous task completes successfully and returns the results of the task as a value. 

* The second (reject) is called when the task fails, and returns the reason for failure, which is typically an error object.

If the promise reaches fulfilled state or rejected state, the promise is resolved -> a promise cannot go from the fulfilled state to the rejected state and vice versa. It also cannot go back from the fulfilled state or rejected state to the pending state.

---

## Consuming a Promise: then, catch, finally

1. The `then()` method

The then() method is used to schedule a callback to be executed when the promise is successfully resolved. It gets a callback function.
A `then` call will return a rejected promise <u>if the function throws an error or returns a rejected Promise</u>.In all other cases, a resolving Promise is returned. 

2. The `catch()` method

If you want to schedule a callback to be executed when the promise is rejected, you can use the catch() method of the Promise object.  It gets a callback function

3. The `finally()` method


---

## Chained Promises

`.then` **takes a callback function and returns another Promise**

```javascript
myPromise
.then(handleResolvedA)
.then(handleResolvedB)
.then(handleResolvedC)
.catch(handleRejectedAny);
```

callback hell : https://www.freecodecamp.org/news/javascript-es6-promises-for-beginners-resolve-reject-and-chaining-explained/

cheatsheet: https://www.codecademy.com/learn/asynchronous-javascript/modules/javascript-promises/cheatsheet

cheatsheet: https://devhints.io/promise

good tutorial: https://nodejs.dev/learn/understanding-javascript-promises

---

# FETCH API

The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.

`fetch()` is a mechanism that lets you make simple AJAX (Asynchronous JavaScript and XML) calls with JavaScript.

If you have worked with XMLHttpRequest (XHR) object, the Fetch API can perform all the tasks as the XHR object does.

In addition, the Fetch API is much simpler and cleaner. It uses the **Promise** to deliver more flexible features to make requests to servers from the web browsers.

The `fetch()` method is available in the global scope that instructs the web browsers to send a request to a URL.

The promise rejects if the fetch was unable to make HTTP-request, e.g. network problems, or there’s no such site. 

Abnormal HTTP-statuses, such as 404 or 500 <u>do not cause an error.</u>

```javascript
fetch(url)
    .then(response => {
        // handle the response
    })
    .catch(error => {
        // handle the error
    });
```

---

## Syntax

```
const fetchResponsePromise = fetch(resource [, init])
```

<u>Parameters</u>

1. resource
This defines the resource that you wish to fetch. This can either be:

    * A string or any other object with a stringifier — including a URL object — that provides the URL of the resource you want to fetch.

    * A Request object.

2. init (Optional)
An object containing any custom settings that you want to apply to the request. The possible options are:

    * method
    The request method, e.g., GET, POST. By default GET

    * headers
    Any headers you want to add to your request, contained within a Headers object 

    * body
    Any body that you want to add to your request


---

# GET Request

A basic fetch request is really simple to set up. Have a look at the following code:

```javascript
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

Here we are fetching a JSON file across the network and printing it to the console. 

The simplest use of `fetch()` takes one argument — the path to the resource you want to fetch — and **returns a promise containing the response (a Response object).**

This is just an HTTP response, not the actual JSON. 

The data returned from the API **is not usually in a useable form**. So you'll **need to convert the data** to a form which your JavaScript can operate with.

To extract the JSON body content from the response, we use the `Response.json()`method.
=> Returns a promise that resolves with the result of **parsing** the response body text as JSON.

If the contents of the response are in the raw text format, you can use the `text()` method. 
=> The text() method returns a Promise that resolves with the complete contents of the fetched resource

-

1st tutorial => Download progress Fetch : https://dev.to/tqbit/how-to-monitor-the-progress-of-a-javascript-fetch-request-and-cancel-it-on-demand-107f

2nd tutorial => Download progress Fetch :https://javascript.info/fetch-progress

3rd tutorial => Download progress Fetch :https://gist.github.com/dzikowski/7405d7f41f00603d17bf0711d379ec9e
