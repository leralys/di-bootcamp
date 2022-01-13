# Local Storage

In the early days of the web, data persistence was only possible 
with a server. Nowadays, through the use of LocalStorage, 

We can store data on clients like browsers and mobile apps 
without communicating with a back-end application.

LocalStorage is a key/value datastore that's available on a user's 
browser. LocalStorage **can only store string data for its keys and values**. 

The data isn't sent to the server when an HTTP request is made.

Data in LocalStorage has no expiration time. It can be removed via JavaScript or by clearing the browser's cache.

---

# Explaination

The localStorage read-only property of the window interface allows you to access a **Storage** object for the Document's origin; the stored data is saved across browser sessions.

The Storage interface of the Web Storage API provides access to a particular domain's session or local storage.

**Properties**

`Storage.length` Read only
Returns an integer representing the number of data items stored in the 
Storage object.

**Methods**

`Storage.key()`
When passed a number n, this method will return the name of the nth key in the storage.

`Storage.getItem()`
When passed a key name, will return that key's value.

`Storage.setItem()`
When passed a key name and value, will add that key to the storage, or update that key's value if it already exists.

`Storage.removeItem()`
When passed a key name, will remove that key from the storage.

`Storage.clear()`
When invoked, will empty all keys out of the storage.

---

# Methods

![](C:\Users\nakac\OneDrive\Documents\Sessions DI\A- Lessons Weeks\Week6 - Database\Week6Day4\Notes\NotesImages\localstorage.png)

---

# Difference local storage and session storage

localStorage is similar to sessionStorage, except that while localStorage data **has no expiration time**, sessionStorage data gets cleared **when the page session ends** — that is, when the page is closed.

localStorage data is specific to the protocol of the document. In particular, for a site loaded over HTTP (e.g., http://example.com), localStorage returns a different object than localStorage for the corresponding site loaded over HTTPS (e.g., https://example.com).

See the Application tab/Local Storage

---

# Difference between cookies, session and local storage

**Storage Limit**

Each Storage method has a maximum size of data you can store with it. 

* Both local storage and session storage has a pretty large memory capacity. Local Storage store up to 10 megabytes and session storage up to 5 megabytes.

* But Cookies on the other hand have a very restrictive capacity of 4 kilobytes. This has an incredible small capacity. So you should not store too much information in cookies.

**Access**

Each storage method has slightly different levels of accessibility.

* Local Storage is accessible in any window or tab that is open to your site. This means if you store some data in local storage on one tab of your browser that same local storage data will be available on all other tabs and windows you have open to that.

* But in session storage, data is only available in the current tab you set the session storage data in. Session storage is tied to the particular session and each tab of your browser is its own session.

* Lastly, cookies are very similar to local storage in the sense that they are accessible from any window or tab. But cookies are also accessible on the server. Every request you make to your backend server, all your cookies are also sent along. So they are also used for authentication-related tasks as well.

**Expiration**

* Local Storage is very useful as it’s data never expires until you manually remove it. 

* Whereas session storage data will expire as soon as you close the tab you are because data is only available to a particular session which is equivalent to a tab.


* Cookies are unique in the sense that you can manually set the expiration date for them.

Clearly, if the data you are storing needs to be available on an ongoing basis then localStorage is preferable to sessionStorage - although you should note both can be cleared by the user so you should not rely on the continuing existence of data in either case.

localStorage and sessionStorage are perfect **for persisting non-sensitive data** needed within client scripts between pages (for example: preferences, scores in games). 

The data stored in localStorage and sessionStorage can easily be read or changed from within the client/browser so should not be relied upon for storage of sensitive or security-related data within applications.

See this video : https://www.youtube.com/watch?v=AwicscsvGLg

**localStorage limitations**

As easy as it is to use localStorage, it is also easy to misuse it. The following are limitations, and also ways to NOT use localStorage:

* Do not store sensitive user information in localStorage

* It is not a substitute for a server based database as information is only stored on the browser

* localStorage is limited to 5MB across all major browsers
localStorage is quite insecure as it has no form of data protection and can be accessed by any code on your web page

* localStorage is synchronous, meaning each operation called would only execute one after the other

---