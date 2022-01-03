
//-------------------------
// POST
// -------------------------

//WITHOUT REFRESHING

let btntwo = document.getElementById("btntwo");
btntwo.addEventListener("click", postData)

let xhr = new XMLHttpRequest();

let data = {
	"name": "morpheus",
 	"job": "leader"
}

function postData () {
	xhr.open('POST', 'https://reqres.in/api/users');
	xhr.setRequestHeader('Content-Type', 'application/json'); //needed
	xhr.responseType = 'json';
	xhr.send(JSON.stringify(data));
}

xhr.onload = function() {
	if (xhr.status > 204 && xhr.status < 200) {
	 	console.log("error status")
		displayError(xhr)
	} else {
		console.log("Finished Loading")
		console.log(xhr.response)
		displayUser(xhr.response) 
	}
};

// Triggers periodically while the response is being downloaded
xhr.onprogress = function(event) {
	console.log("progress", xhr)
};

// When the request couldn’t be made
xhr.onerror = function(event) {
	console.log("error", xhr);
  	displayError(xhr)
};

const displayUser = (user) => {
	let results = document.getElementById("results")
	let li = document.createElement("li");
	li.textContent = `${user.name} - ${user.job}`
	results.appendChild(li);
}

const displayError = (xhr) => {
	console.log("in display error")
	let error = document.getElementById("error");
	let h2 = document.createElement("h2");
	h2.textContent = `Error`;
	h2.style.backgroundColor = 'pink';
	error.appendChild(h2);
}




// Example with length computable

// xhr.onload = function() {
// 	console.log("finished")
// 	if (xhr.status != 200) {
// 	 	console.log("error status")
// 		displayError(xhr)
// 	} else {
// 		console.log("Finished Loading")
// 		displayUser(xhr.response) 
// 	}
// };

// xhr.onprogress = function(event) {
// 	console.log("Progressing")
// 	console.log("progress", xhr)
// 	console.log("event.lengthComputable", event.lengthComputable)
// 	console.log(`Received ${event.loaded}`)
// 	console.log("progress", xhr)
// };

// xhr.onerror = function(event) {
// 	console.log("ERROR")
// 	console.log("error", xhr);
//  displayError(xhr)
// };
