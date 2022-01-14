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



    // let startDate = new Date(elem.startDate);
    // let endDate = new Date(elem.endDate);
    // let todayDate = new Date();
    // let daysUntilStart = Math.ceil((startDate - todayDate) / 1000 / 60 / 60 / 24);
    // let daysUntilEnd = Math.ceil((endDate - startDate) / 1000 / 60 / 60 / 24) + daysUntilStart;
    // console.log('start', startDate);
    // console.log('end', endDate);
    // console.log('now', todayDate);
    // console.log('untilStart', daysUntilStart);
    // console.log('untilEnd', daysUntilEnd);


    // console.log(today)
    // days left from start
    // console.log(startDate);
    // console.log(endDate);
    // let result = (endDate - startDate) / 1000 / 60 / 60 / 24;
    // console.log(result)
});


