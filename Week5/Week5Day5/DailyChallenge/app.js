

// Note
// The program should take the currency which the user currently has and the currency in which they would like to receive, as well as the amount of money.
// Afterwards, the program will output the correct exchange rate based on the data from the APIs.
// First, you need to fetch all the supported currencies, in order to add the currencies options (ie From - To)
// in the currency converter. In the Currency Layer API documentation provided above, check out the part :
// “Supported Currencies“
// To convert from a currency, to another one, you need to fetch the Real-time Rates.
// In the Currency Layer API documentation provided above, check out the part : “Real-time Rates”.
// This API will provide data needed to calculate exchange rates between currencies.

// http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&format=1
// and this API key 6b543e9294a71d26a6606f5449cf71a6

// http://api.currencylayer.com/list?access_key=053566e7e6aaa46e3429b84fdeaf40d6

// // "live" - get the most recent exchange rate data
// https://api.currencylayer.com/live
// // "convert" - convert one currency to another  
// https://api.currencylayer.com/convert?from=EUR&to=GBP&amount=100 

const api = 'http://api.currencylayer.com/';


const form = document.forms[0];

async function fetchList() {
    try {
        const responce = await fetch(`${api}list?access_key=053566e7e6aaa46e3429b84fdeaf40d6`);
        const data = await responce.json();
        return data.currencies;
    }
    catch (e) {
        console.log('Oh no!', e);
    }

}

(async function attachCurrenciesList() {
    const respData = await fetchList();
    const datalist = document.createElement('datalist');
    datalist.id = 'currencies-list';
    for (let currency in respData) {
        let option = document.createElement('option');
        option.value = `${currency} - ${respData[currency]}`;
        datalist.append(option);
        form.appendChild(datalist)
    }
})()

async function convert(event) {
    event.preventDefault();
    const from = document.querySelector('#from').value.slice(0, 3);
    const to = document.querySelector('#convert-to').value.slice(0, 3);
    const amount = Number(document.querySelector('#amount').value);
    try {
        const responce = await fetch(`${api}live?access_key=053566e7e6aaa46e3429b84fdeaf40d6`);
        const data = await responce.json();
        const quote = data.quotes[`${from}${to}`];
        let result = quote * amount;
        appendResult(result);
    }
    catch (e) {
        console.log('Oh no!', e);
    }
}

function appendResult(num) {
    let displayRes = document.querySelector('.display-result');
    let span = document.createElement('span');
    span.innerText = num;
    displayRes.append(span);
}

(function eventListeners() {
    form.addEventListener('submit', convert);
})()

// window.addEventListener('load', () => attachCurrenciesList);





