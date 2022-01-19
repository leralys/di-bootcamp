const root = document.getElementById('root');

const appendSelect = (arr) => {
    const select = document.createElement('select');
    arr.forEach(el => {
        // let option = document.createElement('option');
        const option = new Option(`${el.first_name} ${el.last_name}`, el.customer_id)
        // option.innerText = `${el.first_name} ${el.last_name}`;
        // option.value = el.customer_id;
        select.append(option);
    })
    root.append(select);
}

const displayCustomers = async () => {
    try {
        const res = await fetch('http://localhost:8000/customers');
        const data = await res.json();
        appendSelect(data);
    }
    catch (e) {
        console.log(e);
    }
}

const displayCustomer = (arr) => {
    if (document.querySelector('#get_m') != null) {
        document.querySelector('#get_m').remove();
    }
    const p = document.createElement('p');
    p.id = 'get_m';
    p.innerText = `${arr[0].first_name} ${arr[0].last_name}, email: ${arr[0].email}`;
    document.body.append(p);
}

const getCustomer = async () => {
    const id = document.getElementById('customer-id').value;
    try {
        const res = await fetch(`http://localhost:8000/customer?customerId=${id}`);
        const data = await res.json();
        displayCustomer(data);
    } catch (e) {
        console.log(e);
    }
}

const btn = document.getElementById('btn');
btn.addEventListener('click', getCustomer);

displayCustomers();