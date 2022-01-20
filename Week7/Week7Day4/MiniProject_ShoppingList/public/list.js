const displayList = (arr) => {
    arr.forEach(el => {
        let p = document.createElement('p');
        p.innerText = `${el.item}: ${el.amount}`;
        p.style.textTransform = 'capitalize';
        root.appendChild(p);
    })
}

const getList = async () => {
    try {
        const res = await fetch('http://localhost:8080/list');
        const data = await res.json();
        displayList(data.table);
    }
    catch (e) {
        console.log(e);
    }
}

getList();