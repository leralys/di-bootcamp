let products = [
    {
        id: 0,
        name: "Deluxe Bicycle",
        url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
        price: 499.98
    },
    {
        id: 1,
        name: "Super Deluxe bagpack",
        url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
        price: 134.99
    },
    {
        id: 2,
        name: "Super Duper Scooter",
        url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
        price: 1090.95
    },
    {
        id: 3,
        name: "Smartphone",
        url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
        price: 399.99
    }
];


// 1. Add the above products to the DOM
// * Create a function, that will be called ONCE when the user enters the page
// ==> self invoking function
// * Loop because we are working an array of objects
// * Create a div for each product, h3 for the name, an h4 for the price, an img for the image
// Create a button for every product


// Adds the product to the local storage
// needs to be a an array of objects
// setItem
// Strignify

let arrProducts = [];

const addToCart = (event) => {
    // retrieve the name and price of the product we click on
    let divParent = event.target.parentNode;
    // retrieve the text content of the title of the product
    let title = divParent.children[0].textContent;
    // retrieve the value attribute of the price of the product
    let price = Number(divParent.children[1].getAttribute("value"));
    console.log(title,price)

    //created the object
    let productObj = {
        title,
        price,
    }

    // add the product object to the arr
    arrProducts.push(productObj);
    console.log(arrProducts)

    // add the arrProducts to the localStorage
    localStorage.setItem("userCart", JSON.stringify(arrProducts));
}


// self invoking arrow function
const displayProducts = (() => {
    products.forEach((element, index, arr)=> {
        // creating the node elements
        let container = document.getElementById("allProducts");
        let card = document.createElement("div");
        let nameProduct =  document.createElement("h3");
        let priceProduct = document.createElement("h4");
        let imgProduct = document.createElement("img");
        let buttonProduct = document.createElement("button");

        // adding content to the node elements
        let title = document.createTextNode(element["name"]);
        nameProduct.appendChild(title);

        let price = document.createTextNode(`ILS ${element["price"]}`);
        priceProduct.appendChild(price);
        priceProduct.setAttribute("value", element["price"])


        imgProduct.setAttribute("src", element["url"])
        imgProduct.setAttribute("alt", element["name"])

        let buttonText = document.createTextNode(`Click to add the ${element["name"]} to your cart`);
        buttonProduct.appendChild(buttonText);

        card.append(nameProduct,priceProduct,imgProduct,buttonProduct);
        container.appendChild(card);

        // Add an event listener to the button
        buttonProduct.addEventListener("click", addToCart);
    })
})()




