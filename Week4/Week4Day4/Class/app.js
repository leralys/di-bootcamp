// Object destructuring
//---------------------
// Destructuring
// -----------------------

let characters = {
    name: 'Hermione Granger',
    house: 'Gryfindor',
    height: 2,
    friend: {
        username: 'Harry Potter',
    }
}

// let name = characters.name;
// let house = characters.house;

// the same as

// let {name, house} = characters;
// console.log("name is : ", name, "house is :", house)
// console.log(characters); //the object is unchanged

// rename the variables created while destructuring
// let {keyName : variableName} = obj
// --> the value of the keyName will be assigned to the variableName
// let {name : wizardUsername, house : wizardHouse} = characters;
// console.log("wizardUsername is : ", wizardUsername, "wizardHouse is :", wizardHouse )

// default value with destructuring
// let {name : wizardUsername, house : wizardHouse, height = 1.60} = characters;
// console.log("wizardUsername is : ", wizardUsername, "wizardHouse is :", wizardHouse, "height is : ", height)
// If the height key doesn't exist, we set the height variable to 1.6
// console.log(characters)

// renaming the variable and pass a default value to the variable
// let {name, house, height : wizardHeight = 1.6} = characters;
// console.log("name is : ", name, "house is :", house, "wizardHeight is :", wizardHeight )
// console.log(characters)

//---------------
// Object.entries
// -------------

let character = {
    name: 'Hermione Granger',
    house: 'Gryfindor',
    age: 20,
};

let arrayCharacter = Object.entries(character)
//   console.log(arrayCharacter)

//Destructure inside the loop
// for (let elem of arrayCharacter){
//   console.log("elem : ", elem);
//   let [key, value] = elem;
//   console.log(key, value)
// }

// THE SAME
// Destructure inside the statement of the loop
// for (let [key,value] of arrayCharacter){
//   	console.log("key : ", key, " , value: ", value)
// }

//   Copy Objects
//---------------------
//Copy objects
//--------------------------

// let characters = {
// 	name: 'Hermione Granger',
// 	house: 'Gryfindor'
// };

// let newCharacter = characters; //they point to the same adress
// console.log("newCharacter : ", newCharacter, ", \ncharacters", characters)
// newCharacter["name"] = "Harry";
// console.log("newCharacter : ", newCharacter, ", \ncharacters", characters)


// let person = { ...characters};// they point to different adress
// console.log("person : ", person, ", \ncharacters", characters)
// person["house"] = "Israel"
// console.log("person : ", person, ", \ncharacters", characters)
// console.log("person house = ", person["house"], "characters house", characters["house"]) //unchanged


// With Nested objects : PROBLEM
// let characters = {
// 	name: 'Hermione Granger',
// 	house: 'Gryfindor',
// 	friend :  {
// 		name : 'Harry Potter',
// 	}
// };

// let person = {...characters};
// console.log("person : ", person, ", \ncharacters", characters)
// person["friend"]["name"] = "Hagrid"
// PROBLEM : the name of the friend is changed in both objects
// console.log("person : ", person, ", \ncharacters", characters)

// Solution : Deep Cloning by spreading

// let person = {
//     ...characters,
//     friend: {
//         ...characters.friend
//     }
// };

// person["friend"]["name"] = "Hagrid"
// UNCHANGED
// console.log("person friend = ", person["friend"]["name"], "characters friend", characters["friend"]["name"]) //unchanged

// Nested destructuring
//----------------
//NESTED DESTRUCTURING
//----------------

// let characters = {
// 	name: 'Hermione Granger',
// 	house: 'Gryfindor',
// 	friend :  {
//     username : 'Harry Potter',
// 	}
// }

// //syntax
// let {nameKey : {nameSubKey}} = object

//nested destructuring
// let {friend : {username}} = characters;
// console.log(username)

//nested destructuring with a different variable name and a default value
// let {friend : {username : wizardfriendName = "John"}} = characters;
// console.log(wizardfriendName)
// console.log(friend)


let characters1 = {
    name: 'Hermione Granger',
    house: 'Gryfindor',
    friend: {
        username: 'Harry Potter',
        favColors: ["blue", "pink"]
    }
}


//nested destructuring object
//destructuring of an array
let { friend: { favColors: [first, second] } } = characters1;
// console.log(first, second)

// Destructuring in a function
//Destructure inside a function
function getDetails({ members: membersFamily, lastname: lastnameFamily }) {
    // console.log(membersFamily, lastnameFamily)
}

getDetails({ members: 2, lastname: "Smith" })


// ## Exercise1
// Pass this object {name: 'Harry Potter',house: 'Gryfindor',goodstudent : false}
// as an argument of the getDetails function.
// Destructure the object in the parameter (ie. you should have 3 parameters : name, house and goodstudents)
// function getDetails(fillInHere) {
// 	console.log(name, house, goodstudent)
// }
// getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

function getDetails({ name, house, goodstudent }) {
    return `${name} is in the ${house} house. Are they a good student? ${goodstudent}`
}

// console.log(getDetails({ name: 'Harry Potter', house: 'Gryfindor', goodstudent: false }));

// ## Exercise2
// Pass this object
let person = {
    name: 'Hermione Granger',
    house: 'Gryfindor',
    friend: {
        friendName: 'Harry Potter',
        age: 20
    }
}
// as an argument of the getMoreDetails function.
// Destructure the object in the parameter (ie. you should have 4 parameters : name, house , friendName and age)

// //syntax
// let {nameKey : {nameSubKey}} = object


function getMoreDetails({ name, house, friend: { friendName, age } }) {
    console.log(`The student ${name} is in the house ${house}, and the friend of ${name} is ${friendName} who is ${age} years old.`)
}
// getMoreDetails(person);


// ## Exercise3
// Pass this object
const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation: ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses: {
        amount: 2,
        value: "5Million"
    }
}
// as an argument of the getElonMuskDetails function.
// Destructure the object in the parameter and console.log
// - his first name, last name, the 2 cities where he owns an appartment, and the value of the houses 

// //syntax
// let {nameKey : {nameSubKey}} = object


function getElonMuskDetails({ first, last, housesLocation: [loc1, loc2], houses: { amount, value } }) {
    console.log(`${first} ${last} has ${amount} houses in ${loc1} and ${loc2} of the total value of $${value}`);
}
// function getElonMuskDetails({ first, last, housesLocation, houses: { amount, value } }) {
//     console.log(`${first} ${last} has ${amount} houses in ${housesLocation.join(' and ')} of the total value of $${value}`);
// }


// getElonMuskDetails(elonPerson);


//SOLUTION

// ## Exercise1

// function getDetails({name, house, goodstudent}) {
// 	console.log(`${name} is in the ${house} house. Are they a good student? ${goodstudent}`)
// }

// getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

// // ## Exercise2

// function getMoreDetails({name,house,friend : {friendName, age} }) {
// 	console.log(`Students name is ${name} in the ${house} house, and they are friends with ${friendName} who is ${age} years old`)
// }

// getMoreDetails({name: 'Hermione Granger', 
// 				house: 'Gryfindor', 
// 				friend :  {
// 					friendName : 'Harry Potter', age : 20
// 				}
// 				})
// // ## Exercise3

// const elonPerson = {
//     first: 'Elon',
//     last: 'Musk',
//     housesLocation : ["new york", "paris"],
//     twitter: '@elonmusk',
//     company: 'Space X',
//     houses : {
//       amount: 2,
//       value : "5Million"
//     }
// }

// getElonMuskDetails(elonPerson)

// function getElonMuskDetails({first, last, housesLocation : [a,b], twitter, company, houses : {amount, value}}) {


// console.log(`his name is ${first} ${last} and he has ${amount} homes in ${a} and ${b} worth a combined total of ${value} Dollars`)
// }


// Constructor Functions

// function Character(wizardname, wizardhouse, wizardPoint, wizardEnemy) {
//     //attribute
//     this.name = wizardname;
//     this.house = wizardhouse;
//     this.point = wizardPoint;
//     this.enemy = wizardEnemy;

//     this.fight = function () {
//         console.log(`${this.name} is fighting ${this.enemy.name}`)
//         this.enemy.point -= 10
//     }
// }


// let hermioneCharacter = new Character("Hermione", "Grinfindor", 34)
// console.log(hermioneCharacter)
// console.log(hermioneCharacter.house)

// let harryPotterCharacter = new Character("Harry", "Grinfindor", 100, hermioneCharacter)
// console.log(harryPotterCharacter)
// console.log(harryPotterCharacter.house)

// harryPotterCharacter.fight()


// Exercise
// 1) Create a TV function constructor with properties brand, channel and volume.
// Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. The methods, when called, will increase or decrease the volume by 1.
// 3) Create an Object for the LG TV, console.log the brand of the TV and call the methods increase and decrease volume


function TV(brand, channel = 1, volume = 50) {
    //attribute
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
    this.increase = () => { //i guess it is also ok
        this.volume += 1;
    };
    this.decrease = function () {
        this.volume -= 1;
    }
}

let lgTV = new TV('LG');
// console.log(lgTV);
// lgTV.increase();
// lgTV.increase();
// console.log(lgTV);
// lgTV.decrease();
// console.log(lgTV);


// class syntax
//class syntax
class Character {
    constructor(wizardname, wizardhouse, wizardPoint) {
        this.name = wizardname;
        this.house = wizardhouse;
        this.points = wizardPoint;
    }

    fight() {
        console.log(`${this.name} is fighting`)
        this.points -= 10
    }
}

let harryPotterCharacter = new Character("Harry", "Grinfindor", 100);
console.log(harryPotterCharacter.house)

harryPotterCharacter.fight();
console.log(harryPotterCharacter.points);