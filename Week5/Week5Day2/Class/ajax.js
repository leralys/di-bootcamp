// let btn = document.getElementById("btn");
// btn.addEventListener("click", requestData)

// let xhr = new XMLHttpRequest();

// function requestData() {
//     xhr.open('GET', 'https://lisenakache.github.io/HttpRequestGithub/test.json');
//     xhr.responseType = 'json';
//     xhr.send();
// }

// //5. when the request is complete and the response is fully downloaded.
// xhr.onload = function () {
//     document.body.style.backgroundColor = "white";
//     if (xhr.status != 200) {
//         console.log("error status")
//         displayError(xhr)
//     } else {
//         console.log("Finished Loading")
//         console.log(xhr.response)
//         displayUser(xhr.response)
//     }
// };

// // 6. triggers periodically while the response is being downloaded
// xhr.onprogress = function (event) {
//     console.log("progress", xhr)
//     document.body.style.backgroundColor = "red";
// };

// //7. when the request couldn't be made - when there is a NETWORK error
// xhr.onerror = function (event) {
//     console.log("error", xhr);
//     displayError(xhr)
// };

// const displayUser = (animals) => {
//     let results = document.getElementById("results")
//     animals.forEach(info => {
//         let li = document.createElement("li");
//         li.textContent = `${info.name} - ${info.species}`
//         results.appendChild(li)
//     });

// }

// const displayError = (xhr) => {
//     console.log("in display error")
//     let error = document.getElementById("error");
//     let h2 = document.createElement("h2");
//     // h2.textContent = `Error`;
//     h2.textContent = `Error : ${xhr.status}`
//     h2.style.backgroundColor = 'pink';
//     error.appendChild(h2);
// }


// Exercise
// # AJAX
// - Make an HTTP request using the GET METHOD on this API:
// https://jsonplaceholder.typicode.com/users
// - Use the method onload, onprogress, onerror
// - If there is no error, display on the page the name, email, city of the 3 first users


const req = new XMLHttpRequest();

//5. when the request is complete and the response is fully downloaded.
req.onload = function () {
    document.body.style.background = 'white';
    if (req.status != 200) {
        console.log('something went wrong')
        displayError(req)
    } else {
        console.log('all done with request');
        let resp = this.response;
        console.log(resp)
        displayUsers(resp);
    }
}

req.onprogress = function () {
    console.log('progress', req);
    document.body.style.background = 'blue';
};
req.onerror = function () {
    console.log('error');
    displayError(req);
};

(function requestData() {
    req.open('GET', 'https://jsonplaceholder.typicode.com/users');
    req.responseType = 'json';
    req.send();
})();

const displayUsers = rsp => {
    for (let i = 0; i < 3; i++) {
        let div = document.createElement('div');
        div.innerHTML = `<p>Name: ${rsp[i].name}</p>
                         <p>Email: ${rsp[i].email}</p>
                         <p>City: ${rsp[i].address.city}</p>
                         <br>`
        document.body.append(div);
    }
}

const displayError = rqst => {
    console.log('in display error func')
    let h2 = document.createElement('h2');
    h2.innerText = `Error : ${rqst.status}`
    h2.style.backgroundColor = 'pink';
    document.body.append(h2);
}