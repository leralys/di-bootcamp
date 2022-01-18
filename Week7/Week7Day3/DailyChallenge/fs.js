const fs = require('fs');

// Create an fs.js file and use the Node js File System to read the RightLeft file. In the file, you will see a list of symbols : > and <. Each one of this symbol has a meaning:
// > means that you move 1 step to the right
// < means that you move 1 step to the left

// Use the corresponding operations to calculate the final position at the end of the file - The answer should be: 74 steps to the right.
// Use the corresponding operations to calculate the number of steps needed to hit position the -1 for the first time - The answer should be: 1795 steps.


const calcSteps = (() => {
    fs.readFile('./rightLeft.txt', (err, data) => {
        if (err) {
            console.log('error', err);
        }
        let str = data.toString();
        let counter = num = 0;
        let isFirst = false;
        for (let i = 0; i < str.length; i++) {
            counter++
            str[i] === '>' ? num++ : num--;
            if (num === -1 && isFirst == false) {
                console.log(`First time in left side is in ${counter} steps`);
                isFirst = true;
            }
        }
        let direction;
        num > 0 ? direction = 'right' : direction = 'left';
        console.log(`The final position is: ${num} steps to the ${direction}`);
    })
})();
