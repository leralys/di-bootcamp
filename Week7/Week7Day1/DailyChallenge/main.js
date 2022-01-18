const largeNumber = 356;

const getCurrDateAndTime = () => {
    let currDate = new Date;
    let dateTimeStr = `Current date is ${currDate.getDate()}/${currDate.getMonth() + 1}/${currDate.getFullYear()},
    Time is ${currDate.getHours()}:${currDate.getMinutes()}`;
    return dateTimeStr;
}

// let currDate = new Date;
// console.log(`Current date is ${currDate.getDate()}/${currDate.getMonth() + 1}/${currDate.getFullYear()},
// Time is ${currDate.getHours()}:${currDate.getMinutes()}`);

module.exports = {
    largeNumber,
    getCurrDateAndTime
}