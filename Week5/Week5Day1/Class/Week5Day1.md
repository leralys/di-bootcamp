# Client - server

Client-server denotes a relationship between cooperating programs in an application, composed of clients initiating requests for services and servers providing that function or service.

---

## Client

### What is a client ?

Clients, also known as service requesters, are pieces of computer hardware or server software that request resources and services made available by a server.

The device that makes the request, and receives a response from the server, is called a client

---

## Server

### What is a server?

**A server collects and sends information across a network.**

A server is a software or hardware device that accepts and responds to requests made over a network. 

On the Internet, the term "server" commonly refers to the computer system that receives requests for a web files and sends those files to the client.

A server is a computer that serves information to other computers. These computers, called clients, can connect to a server through either a local area network or a wide area network, such as the internet.

<u>A server</u> : is a device or computer program that provides functionality for other devices or programs. 

<u>Web Server</u> : hosts web pages and facilitates the existence of the World Wide Web.
Website is stored in the web server

---

## Web servers and HTTP

**Web browsers** communicate with **web servers** using the **HyperText Transfer Protocol (HTTP)**. When you click a link on a web page, submit a form, or run a search, the browser sends an HTTP Request to the server.

The client server relationship communicates in a **request–response** messaging pattern and **must adhere to a common communications protocol**, which formally defines the rules, language, and dialog patterns to be used. 

---

### How does a web server work?

Every time you use the internet you are accessing a server. When you enter a **URL** into a browser your computer communicates with the server hosting that website and pulls the data onto your machine.

This is a simplistic view of how the process works

1. You enter a URL and your web browser requests a web page 
2. The web browser requests a full URL for the site it wants to display
3. This information is sent to the server
4. The web server finds and builds all the data needed to display the site (this is why some sites load quicker than others)
5. Your web browser receives the data and displays the website to you

---

# What is a URL

**URL** : **Uniform Resource Locator**, a tool used to find webpages -> The name given to the way webpages are referenced and found using web browsers
Is used to specify addresses on the World Wide Web

---

* **Protocol**: Usually either `http://` or `https://`, this tells the web browser to expect a web address to follow. Modern web browsers don't require you to type the protocol; it will fill that in on its own.

* **Domain**: This is the highest-level part of a URL — the website's name. 
A host, or web site, on the Internet is identified by a host name, such as `www.example.com`. Host names are sometimes called domain names. Host names are mapped to IP addresses. A host name is used when a web client makes an HTTP request to a host. The user making the request can specify the IP address of the server rather than the host name, but that is now unusual on the Internet. Host names are more convenient for users than numeric IP addresses.

* **Path**: Think of this as the folder structure of the website, so a browser knows which subfolder to find the webpage in.

* **Webpage**: This is the last part of the URL and is the specific page you are requesting. It's generally the actual filename of the page as it is stored on the domain computer. 

* **A query string**. If a query string is used, it follows the path component, and provides a string of information that the resource can use for some purpose (for example, as parameters for a search or as data to be processed). The query string is usually a string of name and value pairs; for example, `term=bluebird`. Name and value pairs are separated from each other by an ampersand (&); for example, `term=bluebird&source=browser-search`. If a query string is specified, it is preceded by a question mark.
**URL parameters are inherently "insecure" as they can be changed by users and then resubmitted**

---

Good video to see ON HTTP: https://www.youtube.com/watch?v=DuSURHrZG6I

---

# Forms

```javascript
<form action="/signup" method="post" id="signup"></form>
```

The <form> element has two important attributes: action and method.

1. **action** specifies a URL that processes the form submission. In this example, the action is the `/signup `URL.
2. **method** specifies the HTTP method to submit the form with. The method is either post or get.

## Submitting a form

Typically, a form has a submit button. 
When you click it, the browser sends form data to the server. 
To create a submit button, you use `<button>` element or `<input>` element with the type `submit`:

## How

Generally, a form is submitted when the user presses a submit button. However, sometimes, you may need to submit the form programmatically using JavaScript.
The form validation script uses the onsubmit() event of the form to validate the input. The browser does not trigger the onsubmit event if you call the submit method programmatically. Therefore, if the form is using the form validator script, call the onsubmit method also to trigger the validation.

Link about form validation : https://www.javascripttutorial.net/javascript-dom/javascript-form/
Link on deployement : https://www.youtube.com/watch?v=nZ3BaTY8c9M

Important : https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview

---

# JSON

JSON (JavaScript Object Notation) is a lightweight **data-representation format**. It is easy for humans to read and write. It is easy for machines to parse and generate. 

JSON is language-independent (just like XML), meaning you can use it with any programming language.

JSON is a generic data format with a minimal number of value types: strings, numbers, booleans, lists, objects, and null

```javascript 
'{"name":"John", "age":30, "car":null}'
```

```javascript
'{
	"employees":[
	    {"firstName":"John", "lastName":"Doe"},
	    {"firstName":"Anna", "lastName":"Smith"},
	    {"firstName":"Peter", "lastName":"Jones"}
	]
}'
```

---

# Syntax

JSON data is written as name/value pairs (aka key/value pairs).

A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value:

Example
`"name":"John"`


![JSON](NotesImages/json.png)


---

# Why use JSON

The JSON format is syntactically similar to the code for creating JavaScript objects. Because of this, a JavaScript program can easily convert JSON data into JavaScript objects.

Since the format is text only, JSON data can easily be sent between computers, and used by any programming language.

* JSON is syntax for storing and exchanging data. JSON is text, written with JavaScript object notation.
* When exchanging data between a browser and a server, **the data can only be text.**
* JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.
* We can also convert any JSON received from the server into JavaScript objects.
* JSON data structure helps in building RESTful APIs providing simpler data exchange methods.

---

# JSON methods

JavaScript has a built in function for converting JSON strings into JavaScript objects:`JSON.parse()`

The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string

JavaScript also has a built in function for converting an object into a JSON string:
`JSON.stringify()`

---

## Deep clone arrays with JSON

![clone](NotesImages/clone.png)

However, there are two downsides to this approach:

* The array must be compatible with the JSON format. This means that the nested objects must be serializable and deserializable via JSON.
* It is much slower than other solutions when the array contains a lot of entries.


Some article

1. clone-javascript-object-with-json-stringify-deep-shallow-copyhttps://medium.com/technofunnel/clone-javascript-object-with-json-stringify-deep-shallow-copy-2919c5b3f970

2. 3-ways-to-clone-objects/#lodash-deepclone-vs-jsonhttps://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/#lodash-deepclone-vs-json

3. how-to-deep-copy-objects-and-arrays-in-javascripthttps://javascript.plainenglish.io/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089

---

## Clone an object using Json

If you do not use Dates, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays, Typed Arrays or other complex types within your object, a very simple one liner to deep clone an object is:

`JSON.parse(JSON.stringify(object))`

```
const a = {
  string: 'string',
  number: 123,
  bool: false,
  nul: null,
  date: new Date(),  // stringified
  undef: undefined,  // lost
  inf: Infinity,  // forced to 'null'
  re: /.*/,  // lost
}
console.log(a);
console.log(typeof a.date);  // Date object
const clone = JSON.parse(JSON.stringify(a));
console.log(clone);
console.log(typeof clone.date);  // result of .toISOString()
```

`JSON.parse(JSON.stringify(obj))` is the slowest way to deep clone an object