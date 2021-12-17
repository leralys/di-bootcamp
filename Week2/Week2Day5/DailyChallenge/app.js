// Have you heard the infamous song “99 Bottles of Beer?”
// In this exercise you need to console.log the lyrics to the song 99 Bottles of Beer.

// Prompt the user for a number to begin counting down bottles.
// In the song everytime a bottle falls we subtract the bottles by 1.
// What your code should do is:
// instead of subtracting by 1, everytime a bottle drops the subtracted number should go up by 1
// For example the first time a bottle drops we subtract by 1, the second time we subtract by 2 and so on.
// The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”.
// Note : Make sure you get the grammar correct.
// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.



let userNum;
do {
    userNum = parseInt(prompt('type a real number'));
} while (userNum <= 0 || isNaN(userNum));

let counter = 1; // each time 1 bottle falls

const sing = (num) => {
    for (let i = 0; i < num; i++) {
        let pronoun = '';
        counter === 1 ? pronoun = 'it' : pronoun = 'them';
        console.log(`${num} bottles of beer on the wall`);
        console.log(`${num} botles of beer`);
        console.log(`Take ${counter} down, pass ${pronoun} around`);
        num = num - counter;
        counter++;
        console.log(`${num} bottles of beer on the wall`);
        console.log('\n');
        if (num - counter < 0 && num > 0) {
            console.log(`${num} bottles of beer on the wall`);
            console.log(`${num} botles of beer`);
            counter = num;
            console.log(`Take ${counter} down, pass ${pronoun} around`);
            if (num - counter <= 0)
                console.log("no bottle of beer on the wall");
            return;
        }
    }
}

sing(userNum, counter);

















// ==============================
// Take a look below for more help.
// ==============================

// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall

// 98 bottles of beer on the wall
// 98 bottles of beer
// Take 2 down, pass them around
// 96 bottles of beer on the wall

// 96 bottles of beer on the wall
// 96 bottles of beer
// Take 3 down, pass them around
// 93 bottles of beer on the wall

// ect …

// ==============================