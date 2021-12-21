// Move the box from left to right. // Tip: use setInterval

console.log('hi');

const btn = document.querySelector('button');
const animate = document.querySelector('#animate');

let id = 'null'; //helps to prevent from starting more than 1 animation at a time
const myMove = () => {
    let position = 0;
    clearInterval(id); //clears interval and starts over if previous animation has not ended
    id = setInterval(function () {
        position++;
        animate.style.left = position + 'px';
        if (position == 350) clearInterval(id)
    }, 1);
}

btn.addEventListener('click', myMove);