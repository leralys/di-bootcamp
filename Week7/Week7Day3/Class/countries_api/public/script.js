const root = document.getElementById('root');
const select = document.createElement('select');

const appendCountries = (arr) => {
    const select = document.createElement('select');
    arr.forEach(el => {
        const option = document.createElement('option');
        option.innerText = el.country;
        option.value = el.country_id;
        select.append(option);
        root.append(select);
    })
}

const fetchCountries = async () => {
    try {
        const res = await fetch('http://localhost:8080/countries');
        const data = await res.json();
        appendCountries(data);
    }
    catch (e) {
        console.log(e);
    }
}

fetchCountries();