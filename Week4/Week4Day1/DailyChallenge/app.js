const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

// Create an array using forEach that contains all the usernames from the gameInfo array,
// add an exclamation point (ie. “!”) to the end of every username.

let arrUserNames = [];

const createArrNamesExclam = array => {
    let newArr = [];
    array.forEach(el => {
        let { username } = el;
        username += '!';
        newArr.push(username);
    });
    return newArr;
}
console.log(createArrNamesExclam(gameInfo));

// Create an array using forEach that contains the usernames of all players with a score bigger than 5

const userNamesScoreFive = array => {
    let arrayScoreFive = [];
    array.forEach(el => {
        let { username, score } = el;
        if (score > 5) arrayScoreFive.push(username);
    });
    return arrayScoreFive;
}
console.log(userNamesScoreFive(gameInfo));


// Find and display the total score of the users.

// const totalScoresArray = gameInfo.map(el => el.score);
// const totalScore = totalScoresArray.reduce((accumulator, curVal) => accumulator + curVal, 0)
// console.log(totalScore);

const getTotalScore = array => {
    let total = array.map(el => el.score).reduce((accumulator, curVal) => accumulator + curVal, 0);
    return total;
}

console.log(`The total score of all users is: ${getTotalScore(gameInfo)}`);