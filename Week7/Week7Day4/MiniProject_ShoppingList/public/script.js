// get customer in post method
// const getCustomerPost = () => {
//     const id = document.getElementById('customeridpost').value;
//     const obj = {
//       cid:id
//     }
//     fetch('http://localhost:8002/customer',{
//       method:'POST',
//       headers: {
//         'Content-type':'application/json'
//       },
//       body: JSON.stringify({cid:id})
//     })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(e => {
//       console.log(e);
//     })
//   }
// const form = document.forms[0];
// const shopItem = document.getElementById('item');
// const shopAmount = document.getElementById('amount');

// class Item {
//     constructor(item, amount) {
//         this.item = item;
//         this.amount = amount;
//     }
// }




const sendData = (e) => {
    e.preventDefault();
    let obj = JSON.stringify(new Item(shopItem.value, shopItem.value));
    // console.log(obj);
    let fetchData = await fetch('http://localhost:8080/list', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: obj
    });
}


// form.addEventListener('submit', sendData);


// fetch(url, fetchData)
// .then(response => {
//     console.log(response);
//     if(response.ok){
//         console.log("great");
//     } else{
//         console.log("bad")
//         throw new Error ("not working")
//     }
//     return response.json()
// })
// .then(res => console.log("res = ", res))
// .catch(error => console.log("error", error))