let myForm = document.forms[0];
const rad = document.querySelector('#radius');
const vol = document.querySelector('#volume');
const btn = document.querySelector('#submit');

const volumeOfASphere = (e) => {
    e.preventDefault();
    let radius = rad.value;
    radius = Math.abs(radius);
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    vol.value = volume;
}

myForm.addEventListener('submit', volumeOfASphere);


