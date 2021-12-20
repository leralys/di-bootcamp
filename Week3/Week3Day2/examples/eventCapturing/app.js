let x = document.getElementById("btn")
let y = document.getElementById("div")
let z = document.getElementById("section")

x.addEventListener("click", XRespondClick, true);
y.addEventListener("click", YRespondClick, true);
z.addEventListener("click", ZRespondClick, true);

function XRespondClick(e) {
    alert("BTN is Clicked")
}

function YRespondClick(e) {
    alert("DIV is Clicked")
}

function ZRespondClick(e) {
    alert("SECTION is Clicked")
}

        //Result if I click on the button
        // Alert : SECTION is Clicked
        // Alert : DIV is Clicked
        // Alert : BTN is Clicked
        // --> The event is triggered from the top to the element that what clicked 