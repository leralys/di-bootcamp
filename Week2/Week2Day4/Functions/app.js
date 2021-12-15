// 1. Create a structured html file linked to a js file
// 2. Write a JS function that takes a parameter: myAge
// 3. Console.log the age of my mum and my dad (my mum is twice my age, and my dad is 1.2 the age of my mum)
// 4. Call the function

const myFunc = myAge => {
    let mum = myAge * 2;
    let dad = mum * 1.2;
    console.log(`My mum is ${mum}, my dad is ${dad}, I am ${myAge}`);
}
myFunc(10);