let num = 7;
const grid = document.querySelector('.grid')
const makeA = (num) => {
    let middle = Math.floor(num / 2)
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            let div = document.createElement('div');
            div.classList.add('cell');
            grid.append(div);
            // horizontal lines
            if ((i == 0 || i == middle) && (j >= middle - 1 && j <= middle + 1)) div.innerText = '*';
            // vertical lines
            if ((j == 1 || j == 5) && i >= 1)
                div.innerText = '*';
        }
    }
}

makeA(7)
