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

const checkLocalStorage = () => {
    if (localStorage.getItem('list') == null) {
        return;
    } else {
        return JSON.parse(localStorage.getItem('list'));
    }
}

//takes start and end dates of the task and calculates how many days left until end, depending on today's date
const calculateDaysLeft = (start, end) => {
    let startD = new Date(start);
    let endD = new Date(end);
    let todayD = new Date();
    let daysUntilStart = Math.ceil((startD - todayD) / 1000 / 3600 / 24);
    let daysUntilEnd = Math.ceil((endD - startD) / 1000 / 3600 / 24) + daysUntilStart;
    return daysUntilEnd;
}

//creates task header (with checkbox, name, edit and delete buttons)
const createTaskHeader = (indx, stringName) => {
    let taskHeader = document.createElement('div');
    taskHeader.classList.add('task-li-name');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = indx;
    checkbox.classList.add('checkbox');
    let label = document.createElement('label');
    label.setAttribute('for', indx);
    label.innerText = stringName;
    iconDelete = document.createElement('i');
    iconDelete.classList.add('far', 'fa-times-circle');
    taskHeader.append(checkbox, label, iconDelete);
    return taskHeader;
}

//creates task div with start date and days left
const createTaskDates = (dstart, left) => {
    let datesDiv = document.createElement('div');
    let showStart = document.createElement('span');
    //here we change the format of data displayed - it's gonna be dd/mm/yy
    let d = new Date(dstart);
    let dText = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear().toString().slice(2)}`;
    showStart.innerText = `Started: ${dText}`;
    let showLeft = document.createElement('span');
    showLeft.innerText = `(${left} days left)`;
    datesDiv.append(showStart, showLeft);
    return datesDiv;
};

//checks if we have todo's in the local storage, if yes, loops over them and appends them to the page
const appendTask = () => {
    let tasksToShow = checkLocalStorage();
    tasksToShow.forEach((elem, index) => {
        let taskLi = document.createElement('div');
        taskLi.classList.add('task-li');
        let taskLiName = createTaskHeader(index, elem.task);
        let daysLeft = calculateDaysLeft(elem.startDate, elem.endDate);
        let taskLiDates = createTaskDates(elem.startDate, daysLeft);
        taskLiDates.classList.add('task-li-dates');
        taskLi.append(taskLiName, taskLiDates);
        mainContainer.append(taskLi);
    })
}
appendTask();








// let dateStr = '2022-01-15';
// let myDate = new Date(dateStr);
// // console.log(`${myDate.getFullYear()}/${myDate.getMonth() + 1}/${myDate.getDate()}`);
// console.log(myDate.getFullYear().toString().slice(2));




// let show = JSON.parse(localStorage.getItem('list'));
// show.forEach(elem => {
//     let daysLeft = calculateDaysLeft(elem.startDate, elem.endDate);
//     console.log(daysLeft);
// });


