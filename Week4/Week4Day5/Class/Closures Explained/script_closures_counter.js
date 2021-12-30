//---------------------------------
//COUNTER EXAMPLE
//-----------------------------

// -------------------------
// I. GLOBAL VARIABLE
// -------------------------

// You could use a global variable, and a function to increase the counter:
// But, the pitfall is that any script on the page can change the counter, 
// without calling increaseCount().

// let button = document.getElementById("btn");
// button.addEventListener("click", increaseCount)

// let result = document.getElementById("result");

// let counter = 0;

// function increaseCount() {
//     ++counter;
//     result.textContent = counter;
// }


// --------------------
// II. LOCAL VARIABLE
// --------------------

// Now, you might be thinking of declaring the variable inside the function:
// But, hey! Every time increaseCount() function is called, 
// the counter is set to 1 again.

// let button = document.getElementById("btn");
// button.addEventListener("click", increaseCount)

// let result = document.getElementById("result");

// function increaseCount() {
//     let counter = 0;
//     console.log(counter)
//     ++counter;
//     console.log(counter)
//     result.textContent = counter;
// }

// --------------------------
// III. NESTED FUNCTION
// --------------------------

// This could have solved the counter dilemma,
// problem : we need to call the increaseCount() 
// function x number of times
// to change the counter 

// let button = document.getElementById("btn");
// button.addEventListener("click", makeCouter)

// let result = document.getElementById("result");

// // outer
// function makeCouter(){
//     let counter = 0;
//     console.log("in the outer , ", counter)

//     //an inner function has access to the scope of its parent
//     //if a variable was created inside the outer scope, then the
//     //inner scope has access to it
//     function increaseCount(){
//        counter++
//        console.log("in the inner , ", counter)
//        result.textContent = counter;
//     }

//     increaseCount();
// }

// ==> Solution : 
// * We need to reach the increaseCount() function 
// from the outside 
// * Find a way to set the counter to 0, only once

//----------------------
// IV. CLOSURE 
//----------------------

// const makeCounter = () => {
//   let counter = 0;
//   console.log("outer counter : ", counter)

//   const increaseCount = () => {
//     counter ++;
//     result.textContent = counter;
//     console.log("inner counter : ", counter)
//     return counter;
//   }

//   return increaseCount; 
// };

// let button = document.getElementById("btn");
// let result = document.getElementById("result");

// button.addEventListener("click", ()=> makeCounter()());

// Benefit:
// We are able to reach the increaseCount() function 
// from the outside 

// Problem : we call the makeCounter() everytime we click on the button, 
// so we reset the counter to 0

// ==> Solution
// Call the outer function once, 
// and the inner function as many time as we want

// The goal is : 
// * To set the counter to 0 ONLY ONCE
// Then everytime we click on the button, 
// we will inscrease the counter without resetting it to 0

//----------------
// V. FINAL SOLUTION : CLOSURE  with self invoking function
// ----------------

//SOLUTION EXPLAINED
// The pattern is: 
  // * we call ONCE the outer function
  // * everytime we click on the button, we call the inner function

// The anonymous function is self invoking
// It's result (from the return statement) is assigned to the 
// makeCounter variable

// const makeCounter = (() => {
//   let counter = 0;
//   console.log("outer counter : ", counter)

//   const increaseCount = () => {
//     counter ++;
//     result.textContent = counter;
//     console.log("inner counter = ", counter)
//     return counter;
//   }

//   console.log("outer counter = ", counter)
//   return increaseCount; 

// })()

// let button = document.getElementById("btn");
// button.addEventListener("click", () => makeCounter());
// the same as
// button.addEventListener("click", makeCounter);
// let result = document.getElementById("result");

