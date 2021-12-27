// Instructions
// Using this object : 
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Copy this object using the method that was taught in today’s lesson.
// Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ?
// Change the value of payed to false. Will we also see this modification in the copied objects ? Why ?

let groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        payed: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

let groceriesCopy = groceries;
// console.log(groceries, groceriesCopy); //same
groceries.totalPrice = '35$';
// console.log(groceries, groceriesCopy);
// same totalPrice - 35$ - for both objects. The objects have the same identity which means
// that they are the same object, which is why changing one also changes the value of the copy


groceries.other.payed = false;
// console.log(groceries, groceriesCopy); //same

let groceriesSameProperties = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        payed: true,
        meansOfPayment: ["cash", "creditCard"]
    }
}

// console.log(groceries == groceriesCopy ? true : false); //true
// console.log(groceries == groceriesSameProperties ? true : false); //false
// console.log(groceriesCopy == groceriesSameProperties ? true : false); //false


// When you compare objects with JavaScript’s == operator, it compares by identity:
// it will produce true only if both objects are precisely the same value.
// Comparing different objects will return false, even if they have identical properties.