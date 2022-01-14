// Every task should be displayed in the following way:

// Name
// Starting date
// How many days left to complete the task.
// Note:
// Example: if a task was set yesterday and the end date is in 5 days, then there are 4 days remaining to complete the task.
// Example: if a task was set to start tommorow and the end date is in 5 days then there are 6 days remaining to complete the task.

const mainContainer = document.querySelector('.main-container');

//takes start and end dates of the task and calculates how many days left until end, depending on today's date
const calculateDaysLeft = (start, end) => {
    let startD = new Date(start);
    let endD = new Date(end);
    let todayD = new Date();
    let daysUntilStart = Math.ceil((startD - todayD) / 1000 / 3600 / 24);
    let daysUntilEnd = Math.ceil((endD - startD) / 1000 / 3600 / 24) + daysUntilStart;
    return daysUntilEnd;
}


let show = JSON.parse(localStorage.getItem('list'));
show.forEach(elem => {
    let daysLeft = calculateDaysLeft(elem.startDate, elem.endDate);
    console.log(daysLeft);
});


