//clear the local storage
const clearLocalStorage = () => {
	localStorage.clear()
}

// display the sum on the page and a submit link
const displaySum = (sumProducts, wrapper) => {
	let sumPrice = document.createElement("h1");
	let sum = document.createTextNode(`Total Price: ILS ${sumProducts}`)
    sumPrice.appendChild(sum)

    let submitBtn = document.createElement("a");
	let text = document.createTextNode("Submit and pay by Credit Card")
	submitBtn.setAttribute("href", "index.html")
    submitBtn.appendChild(text)

    submitBtn.addEventListener("click", clearLocalStorage)

	wrapper.append(sumPrice, submitBtn);
}

// function that display the products of the cart
// and the total sum
const displayCart = (dataFromLocalStorage) => {
	let sumTotal = 0;
	let container = document.getElementById("allProductsCart");

	dataFromLocalStorage.forEach((element, index, arr)=> {
        // creating the node elements
        let card = document.createElement("div");
        let nameProduct =  document.createElement("h3");
        let priceProduct = document.createElement("h4");
        
        // adding content to the node elements
        let title = document.createTextNode(element["title"]);
        nameProduct.appendChild(title);

        let price = document.createTextNode(`ILS ${element["price"]}`);
        priceProduct.appendChild(price);
        
		sumTotal += element["price"]

        card.append(nameProduct,priceProduct);
        container.appendChild(card);
    })

	displaySum(sumTotal,container)
}


// As soon as I retrieve the data from local storage
// I want to parse it
// and I want to display it on the page

// Get the item from the local storage
// getItem method
// self invoking function

// self invoking function that retrieves the data from the local storage
const retrieveData = (() => {
	//get the data
	let data = localStorage.getItem("userCart");
	let dataParsed = JSON.parse(data);
	//call the displayCartAndSum function with an argument
	//which is the dataParsed variable
	displayCart(dataParsed)
})()