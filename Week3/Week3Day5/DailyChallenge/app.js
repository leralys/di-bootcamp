


let num = 7;
const grid = document.querySelector('.grid')
for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
        let div = document.createElement('div');
        div.classList.add('cell');
        grid.append(div);
        if (
            ((j === 0 || j === Math.floor(num / 2)) && i !== 0) ||
            (i === 0 && j !== 0 && j !== Math.floor(num / 2)) ||
            i === Math.floor(num / 2)
        ) {
            div.innerText = '*';
        } else div.innerText = '   ';
    }
}

