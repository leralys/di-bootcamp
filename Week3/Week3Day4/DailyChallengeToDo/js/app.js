let listTasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have:
// an input type="checkbox
// a “X” button. Use font awesome for the “X” button.



const submit = document.querySelector('#submit');
const myForm = document.forms[0];
const newTask = document.querySelector('#new-task'); //input of new task
// const listTasks = document.querySelector('.listTasks');
const list = document.querySelector('.listTasks');



const addTask = function () {
    if (newTask.value !== '') {
        let task = document.createElement('div'); //create new todo
        task.classList.add('task');
        let checkbox = document.createElement('input'); //create checkbox
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('checkbox');
        task.append(checkbox); //append checkbox to the todo
        let taskText = document.createTextNode(newTask.value); //append text of the todo
        task.append(taskText);
        list.append(task); //append todo to the list
        list.style.display = 'block';
        newTask.value = '';
    }
}

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('clicked');
    addTask();
});