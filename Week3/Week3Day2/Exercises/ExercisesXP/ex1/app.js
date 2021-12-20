// Using a DOM property, retrieve the h1 and console.log it.
const h1 = document.querySelector('h1');
console.log(h1);

// Using DOM methods, remove the last paragraph in the <article> tag.
const article = document.querySelector('article');
article.removeChild(article.lastElementChild);

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
    h2.style.backgroundColor = 'red';
});

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
    h3.style.display = 'none';
});

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const button = document.createElement('button');
const paragraphs = document.querySelectorAll('p');
button.innerText = 'Click me';
article.append(button);

button.addEventListener('click', () => {
    for (let i = 0; i < paragraphs.length; i++) {
        console.log(paragraphs[i]);
        paragraphs[i].style.fontWeight = '800';
    }
});

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100

h1.addEventListener('mouseover', () => {
    h1.style.fontSize = `${Math.floor(Math.random() * 100) + 1}px`;
})

// BONUS : When you hover on the 2nd paragraph, it should fade out 

const hoverEffect = (event) => {
    let fadeTarget = event.target;
    let fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 60)
}

const returnOpacity = (event) => {
    let target = event.target;
    if (target.style.opacity == 0) target.style.opacity = '1';

}

paragraphs[1].addEventListener('mouseenter', hoverEffect);
paragraphs[1].addEventListener('mouseleave', returnOpacity);