// Every task should be displayed in the following way:

// Name
// Starting date
// How many days left to complete the task.
// Note:
// Example: if a task was set yesterday and the end date is in 5 days, then there are 4 days remaining to complete the task.
// Example: if a task was set to start tommorow and the end date is in 5 days then there are 6 days remaining to complete the task.

// Make each task clickable. When clicking on a task you should display the description: you could use some kind of drop down, for example.

// Add a checkbox next to each task. You can check the checkbox to update the status of the task (ie. from uncompleted to completed).

// Requirements:
// The list of tasks should be added to the page in ascending order, according to their start date.
// Display the completed tasks in a different color. For example : red for uncompleted, green for completed.
// If the task end date has passed, without the task being completed, display the task in a different color.

// Add an “X” button next to each task. The user will be able to delete the task. Make sure to show a confirmation popup/modal to the user, to avoid deleting a task by mistake.

// Add an “Edit” button next to each task. The user can edit a task and save the changes. Another possibility is to double click on the task to edit the details.

const mainContainer = document.querySelector('.main-container');
let tasksToShow;

//takes start and end dates of the task and calculates how many days left until end, depending on today's date
const calculateDaysLeft = (start, end) => {
    let startD = new Date(start);
    let endD = new Date(end);
    let today = new Date();
    let daysUntilStart = Math.ceil((startD - today) / 1000 / 3600 / 24);
    let daysUntilEnd = Math.ceil((endD - startD) / 1000 / 3600 / 24) + daysUntilStart;
    return daysUntilEnd;
}

//creates task header (with checkbox, name, edit and delete buttons)
const createTaskHeader = (indx, nameStr, isCompl) => {
    let taskHeader = document.createElement('div');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    taskHeader.classList.add('task-li-name');
    checkbox.type = 'checkbox';
    checkbox.id = indx;
    //check the checkbox if the task was completed
    isCompl ? checkbox.checked = true : checkbox.checked = false;
    label.setAttribute('for', indx);
    label.innerText = nameStr;
    iconEdit = document.createElement('i');
    iconEdit.classList.add('far', 'fa-edit');
    iconDelete = document.createElement('i');
    iconDelete.classList.add('far', 'fa-times-circle');
    // checkbox listener
    checkbox.addEventListener('click', taskCompleted);
    // delete icon listener
    iconDelete.addEventListener('click', deleteTask);
    taskHeader.append(checkbox, label, iconEdit, iconDelete);
    return taskHeader;
}

//creates task div with start date and days left
const createTaskDates = (dstart, left) => {
    let datesDiv = document.createElement('div');
    let showStart = document.createElement('span');
    let showLeft = document.createElement('span');
    //here we change the format of date displayed - it's gonna be dd/mm/yy
    let d = new Date(dstart);
    let dText = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear().toString().slice(2)}`;
    datesDiv.classList.add('task-li-dates');
    showStart.innerText = `Start: ${dText}`;
    showLeft.innerText = `(${left} days left)`;
    datesDiv.append(showStart, showLeft);
    return datesDiv;
};

const createTaskDesc = (descStr) => {
    let description = document.createElement('div');
    let p = document.createElement('p');
    description.classList.add('task-li-description');
    p.innerText = descStr;
    description.append(p);
    return description;
}


//checks if we have todo's in the local storage, if yes, loops over them and appends them to the page
const appendTask = () => {
    tasksToShow = JSON.parse(localStorage.getItem('list'));
    //sort array of tasks according to their start date in asc order
    tasksToShow.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    tasksToShow.forEach((elem, index) => {
        let taskLi = document.createElement('div');
        let taskLiName = createTaskHeader(index, elem.task, elem.isCompleted);
        let daysLeft = calculateDaysLeft(elem.startDate, elem.endDate);
        // if we have negative num of days left -> the task end date passed before it was completed
        // show that we have 0 days left to complete the task and make the task differenr color
        if (daysLeft < 0) {
            if (!taskLi.classList.contains('task-passed')) {
                taskLi.classList.add('task-passed');
            }
            daysLeft = 0;
        }
        let taskLiDates = createTaskDates(elem.startDate, daysLeft);
        let taskLiDesc = createTaskDesc(elem.description);
        taskLiDates.addEventListener('click', toggleTaskDesc);
        taskLiDesc.addEventListener('click', toggleTaskDesc);
        taskLi.classList.add('task-li');
        if (elem.isCompleted) {
            taskLi.classList.add('task-completed');
        }
        taskLi.append(taskLiName, taskLiDates, taskLiDesc);
        mainContainer.append(taskLi);
    })
}

// -- callback functions for eventlisteners --

// when click on dates /OR description, -> show / hide description
function toggleTaskDesc(e) {
    if (this.nextSibling != null) {
        this.nextSibling.classList.toggle('hidden');
    } else {
        this.classList.toggle('hidden');
    }
}


function taskCompleted(e) {
    // change the status of isCompleted when clicking on checkbox
    if (tasksToShow[e.target.id].isCompleted == false) {
        tasksToShow[e.target.id].isCompleted = true;
        localStorage.setItem('list', JSON.stringify(tasksToShow));
    } else {
        tasksToShow[e.target.id].isCompleted = false;
        localStorage.setItem('list', JSON.stringify(tasksToShow));
    }
    let taskToComplete = e.target.parentNode.parentNode;
    taskToComplete.classList.toggle('task-completed');
}

function deleteTask() {
    console.log('delete task clicked');
}

// initialization - show tasks if we have any
const checkLocalStorage = (() => {
    if (localStorage.getItem('list') == null) {
        return;
    } else {
        appendTask();
    }
})()





// window.addEventListener('load', () => {
//     if (localStorage.getItem('list') == null) {
//         return;
//     } else {
//         console.log(localStorage.getItem('list'));
//         // tasksToShow = tasksToShow.sort((a, b) => a.startDate - b.startDate);
//         // tasksToShow = JSON.parse(localStorage.getItem('list'));
//         // appendTask();
//     }
// });