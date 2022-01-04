

//---------------------------
// POST
// ---------------------------


let btn = document.getElementById("btn");
btn.addEventListener("click", requestData)

function requestData(){
	let url = 'https://reqres.in/api/users'

	//set the data we want to post
	let data = {
	    "name": "John",
	    "job": "Coder"
	}

	//But, as we’re going to send JSON, we use headers option to send application/json instead, 
	//the correct Content-Type for JSON-encoded data.
	// Since you're sending JSON data, you'll need to set a header of Content-Type set to application/json. 
	let fetchData = {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(data),
	}


	fetch(url, fetchData)
	.then(response => {
		console.log(response);
		if(response.ok){
			console.log("great");
		} else{
			console.log("bad")
			throw new Error ("not working")
		}
		return response.json()
	})
	.then(res => console.log("res = ", res))
	.catch(error => console.log("error", error))
}