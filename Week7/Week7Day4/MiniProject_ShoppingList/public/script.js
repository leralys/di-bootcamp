const form = document.forms[0];

class Item {
    constructor(item, amount) {
        this.item = item;
        this.amount = amount;
    }
}

const sendData = async (e) => {
    e.preventDefault();
    const shopItem = document.getElementById('item').value.toLowerCase();
    const shopAmount = document.getElementById('amount').value;
    // if no values - do nothing
    if (!shopItem || !shopAmount) {
        return;
        // if item is not a string and amount is not a number - do nothing
    } else if (Number(shopAmount) != shopAmount || !isNaN(Number(shopItem))) {
        return;
    }
    // fetch to a server with post request
    fetch('http://localhost:8080/list', {
        method: 'POST',
        redirect: 'follow',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(new Item(shopItem, shopAmount))
    })
        // redirect
        .then(window.location.href = "/mylist")
        .catch(err => console.log(err));
}

form.addEventListener('submit', sendData);
