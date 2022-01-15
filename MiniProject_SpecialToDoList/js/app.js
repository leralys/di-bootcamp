// As soon as the user submits the form, the task should be saved.
// By default, the status of the task is “uncompleted” (ie. isCompleted: false)


const task = document.querySelector('#todo-name');
const description = document.querySelector('#todo-description');
const startDate = document.querySelector('#todo-start');
const endDate = document.querySelector('#todo-end');
let arrTodos;


//task class to create a new task object on sumitting the form
class Task {
    constructor(task, description, startDate, endDate) {
        this.task = task;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isCompleted = false;
    }
}

//checks if we have already tasks in the local storage, if not - creates a new array to save tasks
const checkLocalStorage = () => {
    if (localStorage.getItem('list') != null) {
        arrTodos = JSON.parse(localStorage.getItem('list'));
    } else {
        arrTodos = [];
    }
}

// clears inputs
function clearInputs() {
    const clearInputs = document.querySelectorAll('.clear-me');
    clearInputs.forEach(el => el.value = '');
}

// saves a new task to a local storage
const saveTask = (e) => {
    e.preventDefault();
    let taskToSave = new Task(task.value, description.value, startDate.value, endDate.value);
    checkLocalStorage();
    arrTodos.push(taskToSave);
    clearInputs();
    localStorage.setItem('list', JSON.stringify(arrTodos));
};



// --- Event listener for the form, on click saves a new task
const addSubmitListener = (() => {
    const submitFrom = document.forms[0];
    submitFrom.addEventListener('submit', saveTask);
})();