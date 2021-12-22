// Create a function called addTask(). As soon as the user clicks on the button:
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have:
// an input type="checkbox
// a “X” button. Use font awesome for the “X” button.


let listTasks = [];
const submit = document.querySelector('#submit');
const myForm = document.forms[0];
const newTask = document.querySelector('#new-task'); //input of new task
const list = document.querySelector('.listTasks');



const addTask = function () {
    if (newTask.value !== '') {
        let task = document.createElement('div'); //create new todo
        task.classList.add('task');
        let checkbox = document.createElement('input'); //create checkbox
        checkbox.setAttribute('type', 'checkbox');
        checkbox.classList.add('checkbox');
        let icon = document.createElement('i'); //create icon
        icon.classList.add('far', 'fa-trash-alt', 'icon');
        let taskText = document.createTextNode(newTask.value);
        task.append(icon); //append icon
        task.append(checkbox); //append checkbox to the todo
        task.append(taskText); //append text of the todo
        list.append(task); //append todo to the list
        listTasks.push(newTask.value);
        console.log(listTasks);
        list.style.display = 'block';
        newTask.value = '';
    }
}

myForm.addEventListener('submit', function (e) {
    e.preventDefault();
    addTask();
});