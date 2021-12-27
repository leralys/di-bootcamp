// Exercise 1 : Landscape
// Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.
// Change the code below to nested arrow functions.

// let landscape = function () {

//     let result = "";

//     let flat = function (x) {
//         for (let count = 0; count < x; count++) {
//             result = result + "_";
//         }
//     }

//     let mountain = function (x) {
//         result = result + "/"
//         for (let counter = 0; counter < x; counter++) {
//             result = result + "'"
//         }
//         result = result + "\\"
//     }

//     flat(4);
//     mountain(4);
//     flat(4)

//     return result;
// }


let landscape = () => {
    let result = "";
    let flat = x => {
        for (let count = 0; count < x; count++) {
            result += "_";
        }
    }

    let mountain = x => {
        result += "/";
        for (let counter = 0; counter < x; counter++) {
            result += "'";
        }
        result += "\\";
    }

    flat(4);
    mountain(4);
    flat(4)

    return result;
}

//inside landscape we call flat with parameter x (which equals to 4), and on each iteration of x times append _ to result
// // result ____

// then we call mountain with another parameter x (which equals to 4),
// append / to result, then on each iteration of x times append ' to result
//and then append \ to result
// // result ____/''''\

// then we call flat again with parameter x = 4
// // result ____/''''\____


console.log(landscape());
// ____/''''\____
