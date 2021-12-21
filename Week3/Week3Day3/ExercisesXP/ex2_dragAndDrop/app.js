const fill = document.querySelector('.fill');
const emptyBoxes = document.querySelectorAll('.empty');

// fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//emptyBoxes listeners
for (let box of emptyBoxes) {
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
}

// drag functions
function dragStart(e) {
    e.target.classList.toggle('hold'); //this.className+= ' hold;
    setTimeout(() => {
        e.target.className = 'invinsible';
    }, 0);
}

function dragEnd(e) {
    e.target.classList.toggle('fill');
}

function dragOver(e) {
    //preventDefault MANDATORY
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault(); //from the tutorial
    e.target.classList.toggle('hovered');
}

function dragLeave(e) {
    e.target.className = 'empty';
}

function dragDrop(e) {
    //preventDefault MANDATORY
    e.preventDefault();
    e.target.className = 'empty';
    e.target.append(fill);
}