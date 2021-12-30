// Exercise
// # Part 1
// 1) Create a TV class with properties brand, channel and volume. Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. Whe the methods are called it will increase or decrease the volume by 1.
// 3) Create an Object for the LG TV
// 4) Create a subclass for Smart TV
// 5) It overrides the method increase, so it increase the volume by 10 and not by 1
// 6) Add a attribute of Netflix that should be equal to true by default
// # Part II
// 1) Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// 3) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// 4) Add a method to reset TV so it goes back to channel 1 and volume 50.
// 5) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75". 


// Code Class Inheritance

// class Animal
// -> name
// -> age

// -> makeSound


// class Dolphin
// -> swim
// -> breathUnderWater


// PARENT CLASS
class Animal {
    constructor(name, age) {
        this.animalName = name;
        this.animalAge = age;
        this.happy = true;
    }

    makeSound(animalSound) {
        console.log(`The animal ${this.animalName} makes the sound ${animalSound}`)
    }
}


//Child class
//First example
// class Dolphin extends Animal{
//     //use the attributes defined in the Parent Class
//     constructor (dolphinName, dolphineAge) {
//       super(dolphinName, dolphineAge)
//     }

//     //Create a specific method of the child
//     breathUnderWater() {
//       console.log("I'm a dolphin, I can breath under water")
//     }
// }

// let dolphinOne = new Dolphin("Felix", 2);
// dolphinOne.animalName; // Felix
// dolphinOne.makeSound("kkk"); //The animal Felix makes the sound kkk
// dolphinOne.breathUnderWater(); //I'm a dolphin, I can breath under water


//Second example
// class Dolphin extends Animal{
//     constructor () {
//       //override the attributes of the parent class
//       //we call super, so the dolphin class will have access 
//       super()
//       this.swim = true;
//       this.animalName = "DOLPHIN";
//       this.animalAge = 5;
//     }

//     //override the makeSound() method from the parent class
//     makeSound () {
//       console.log("I'm a dolphin, I don't make any sound")
//     }

//     breathUnderWater() {
//       console.log("I'm a dolphin, I can breath under water")
//     }
// }

// let dogOne = new Animal("Rex", 7);
// let dolphinOne = new Dolphin();
// dolphinOne.animalName;
// dolphinOne.makeSound(); //"I'm a dolphin, I don't make any sound"
// dogOne.swim //undefined

//Third example
class Dolphin extends Animal {
    constructor() {
        //override the attributes of the parent class
        //we call super, so the dolphin class will have access 
        super()
        this.swim = true;
        this.animalName = "DOLPHIN";
        this.animalAge = 5;
    }

    //call the makeSound() method from the parent class
    breathUnderWater() {
        super.makeSound("kkk");
        console.log("I'm a dolphin, I can breath under water")
    }
}

let dolphinOne = new Dolphin();
dolphinOne.breathUnderWater(); //The animal DOLPHIN makes the sound kkk
// I'm a dolphin, I can breath under water

//SOLUTION EXERCISES

// Exercise
// # Part 1
// 1) Create a TV class with properties brand, channel and volume. Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. Whe the methods are called it will increase or decrease the volume by 1.
// 3) Create an Object for the LG TV


// class TV {
//     constructor(tvBrand, tvChannel = 1, tvVolume = 50) {
//         this.brand = tvBrand
//         this.channel = tvChannel
//         this.volume = tvVolume

//     }
//     volumeUP() {
//         this.volume += 1
//     }
//     volumeDown() {
//         this.volume -= 1
//     }
// }

// class SmartTv extends TV {
//     constructor(smartTvBrand, smartTVChannel = 1, smartTvVolume = 50, netflix = true) {
//         super(smartTvBrand, smartTVChannel, smartTvVolume)
//         this.netflix = netflix;
//     }
//     volumeUP() {
//         this.volume += 10
//     }
//     volumeDown() {
//         this.volume -= 10
//     }
// }

// let lgTV = new TV("LG")
// console.log(lgTV)
// lgTV.volumeUP()
// console.log(lgTV.volume)
// lgTV.volumeDown()
// console.log(lgTV.volume)

// let smartTvOne = new SmartTv("HP")
// console.log(smartTvOne)
// smartTvOne.volumeUP()
// console.log(smartTvOne.volume)
// smartTvOne.volumeDown()
// console.log(smartTvOne.volume)
// // 4) Create a subclass for Smart TV
// // 5) It overrides the method increase, so it increase the volume by 10 and not by 1
// // 6) Add a attribute of Netflix that should be equal to true by default
// // # Part II
// // 1) Create a TV class with properties like brand, channel and volume.
// // Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// class NewTV {
//     constructor(tvBrand, tvChannel = 1, tvVolume = 50) {
//         this.brand = tvBrand
//         this.channel = tvChannel
//         this.volume = tvVolume

//     }
//     setVolume(vol) {
//         if (vol <= 100 && vol >= 0) {
//             this.volume = vol
//             alert(`the ${this.brand} is set to volume ${this.volume}`)
//             console.log(`the ${this.brand} is set to volume ${this.volume}`)
//         } else {
//             alert("volume was not changed")
//             console.log(`the ${this.brand} is set to volume ${this.volume}`)
//         }
//     }
//     volumeUP() {
//         if (this.volume < 100) {
//             this.volume += 1
//             console.log(`the ${this.brand} is set to volume ${this.volume}`)
//         }
//     }
//     volumeDown() {
//         if (this.volume > 0) {
//             this.volume -= 1
//             console.log(`the ${this.brand} is set to volume ${this.volume}`)

//         }
//     }
//     changeChannel(num) {
//         if (num <= 50 && num >= 0) {
//             this.channel = num
//             alert(`the ${this.brand} is set to channel ${this.channel}`)
//             console.log(`the ${this.brand} is set to channel ${this.channel}`)

//         } else {
//             alert("channel was not changed")
//             console.log(`the ${this.brand} is set to channel ${this.channel}`)

//         }
//     }
//     resetTV() {
//         if (confirm(`Reset TV?`)) {
//             this.channel = 1
//             this.volume = 50
//             alert(`the ${this.brand} was reset and is now set to channel ${this.channel} and volume ${this.volume}`)
//             console.log(`the ${this.brand} was reset and is now set to channel ${this.channel} and volume ${this.volume}`)
//         } else {
//             alert(`the ${this.brand} was NOT reset and is now set to channel ${this.channel} and volume ${this.volume}`)

//             console.log(`the ${this.brand} was NOT reset and is now set to channel ${this.channel} and volume ${this.volume}`)

//         }
//     }
// }

// let newTV = new NewTV("Visio")
// console.log(newTV)
// newTV.setVolume(parseFloat(prompt(`set the volume`)))
// newTV.volumeUP()
// newTV.volumeUP()
// newTV.volumeUP()
// newTV.setVolume(parseFloat(prompt(`set the volume`)))
// newTV.volumeDown()
// newTV.volumeDown()
// newTV.volumeDown()
// newTV.changeChannel(parseFloat(prompt(`set the channel`)))
// newTV.changeChannel(parseFloat(prompt(`set the channel`)))
// newTV.resetTV()



// Lesson on Closures
//-----------------------
// CLOSURE
//------------------------

// A closure is bascially an inner function 
// made accessible from outside of its parent function

// A closure is a function having access to the parent 
// scope even after a parent function has closed

let name = "John";

function checkName() {
    let nameUppercase = name.toUpperCase();
    console.log("in outer", nameUppercase)

    function addExclamation() {
        nameUppercase += "!";
        console.log("in inner,", nameUppercase);
    };

    // return the reference of the inner function
    return addExclamation
}

let inner = checkName();
//checkName() returns the reference of the addExclamation function
console.log(inner)
//ƒ addExclamation() {
//     nameUppercase += "!";
//     console.log("in inner,", nameUppercase);
// }
inner() // JOHN!

// //The same as :
// // By returning the inner function, I can access it in the global scope
// checkName()()



// // let inner = checkName(); 
// // console.log(inner) 
// // // reference of the addExclamation function is
// // // available to the global scope
// // inner();


// checkName()();



function workWithArray() {
    let fruits = ["apple"];

    function addFruit(newFruit) {
        fruits.push(newFruit)
        console.log("fruits : ", fruits)
    }

    return addFruit

}

let innerFunc = workWithArray() //returns the addFruit function
innerFunc("Banana") // the array looks like this ["apple", "Banana"]
innerFunc("Pear") // the array looks like this ["apple", "Banana", "Pear"]



function getNumber(num) {
    let myNumber = num;

    function multiply(multiplyNumber) {
        myNumber *= multiplyNumber
        console.log(myNumber);
    }

    return multiply;

}

let calculation = getNumber(2);
// calculation is equal to the reference of the multiply function
calculation(10);
calculation(2); //20*2