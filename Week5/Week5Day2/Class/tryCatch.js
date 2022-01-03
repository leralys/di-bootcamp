// const checkNum = () => {
//     // block scope
//     try {
//         welcome;
//     } catch (err) {
//         document.body.textContent = err.message;
//     } finally {
//         console.log("hello")
//     }


// };

// checkNum()

//UNCAUGHT ERROR
// let userNum = parseInt(prompt("give me a num bigger than Zero"));

// const checkNum = () => {
//     if (userNum != 0) {
//         console.log("Good Num")
//     } else {
//         throw new Error("Something bad happened!");
//     }
// };

// checkNum();

// CAUGHT ERROR
// let userNum = parseInt(prompt("give me a num bigger than Zero"));

const checkNum = () => {
    try {
        if (userNum != 0) {
            console.log("Good Num")
        } else {
            throw new Error("Something bad happened!");
        }
    } catch (err) {
        document.body.textContent = err.message;
    }
};

// checkNum()


// ## Exercise 1
// Write a function called `divide` that takes two parameters: a numerator and a denominator.
// Your function should return the result of numerator / denominator.
// However, if denominator is zero you should throw the error, "Attempted to divide by zero."




const devide = (numerator, denominator) => {
    try {
        if (denominator === 0) {
            throw new Error('Devision by zero!');
        }
        else return numerator / denominator
    }
    catch (err) {
        console.log(err.message);
    }
}

devide(10, 0);


// SOLUTION

// let division = 2/0;
// console.log(division) - gives Infinity

// function divideNumber(numerator, denominator) {
//     try {
//         if (denominator == 0) {
//             throw new Error("Attempted to divide by Zero");
//         } else {
//             return numerator / denominator
//         }
//     } catch (err) {
//         document.body.textContent = err.message;
//         //Optional
//         denominator = 1;
//         return numerator / denominator
//     }
// }


// let result = divideNumber(10, 4);
// document.body.textContent = result;

// //caught
// let result = divideNumber(10, 0);
// console.log(result)