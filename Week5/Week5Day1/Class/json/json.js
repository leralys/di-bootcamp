//--------------------------
// JSON
// -------------------------

const fromjson = '{"result":true, "count":42}';
const toobj = JSON.parse(fromjson); //convert a JSON string into a JS object
console.log(toobj)
console.log(toobj.count)
console.log("typeof(fromjson) : ", typeof (fromjson), " typeof(toobj) : ",
    typeof (toobj), "toobj['count'] : ", toobj["count"])

const fromobj = { username: "John", age: 25 };
const tojson = JSON.stringify(fromobj) //convert a JS object into a JSON string
console.log(tojson)
console.log(typeof tojson)
console.log(typeof (fromobj), typeof (tojson), tojson);


// Json exe with parse and stringify :

let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`;

const objJs = JSON.parse(jsonString);
let {
    quiz: {
        sport: {
            q1: {
                options: [a, b, c, d],
            },
        },
    },
} = objJs;
console.log(a, b, c, d);
const jsonStr = JSON.stringify(objJs, null, 2);
// const jsonStr = JSON.stringify(objJs);
console.log(jsonStr);


// Shallow and deep copy using Arrays and JSON
//Using Spread Operator is good for array containing primitive data types
let pallet = ["blue", "red"];
let favColors = [...pallet];
//will change my favorite color to "green"
//but won't change the color in the pallet array
favColors[0] = "green"
console.log(favColors); //['green', 'red']
console.log(pallet) //['blue', 'red']


//SHALLOW COPY BY VALUE
//Using Spread Operator is NOT good for array containing nested arrays
let superMarket = ["shampoo", ["chocolate", "vanilla"]];
let cart = [...superMarket];
//will change my first item to "soap" in the cart array
//but won't change the item in the superMarket array
cart[0] = "soap"
console.log(cart); //["soap", ["chocolate", "vanilla"]];
console.log(superMarket) //["shampoo", ["chocolate", "vanilla"]];

//will change the chocolate to caramel
//and WILL change the item in the superMarket array
cart[1][0] = "caramel"
console.log(cart); //["soap", ["caramel", "vanilla"]];
console.log(superMarket) //["shampoo", ["caramel", "vanilla"]];


//DEEP COPY BY VALUE
//Using JSON.stringify and JSON.parse is good for array containing nested arrays
let superMarketIsrael = ["shampoo", ["chocolate", "vanilla"]];
let cartIsrael = JSON.parse(JSON.stringify(superMarketIsrael))
//1. First, we stringify the superMarketIsrael array
//2. Then we pass the new json string as an argument of the parse method
// The notion is called COMPOSING
//will change the chocolate to caramel in the cartIsrael array
//and WON'T change the item in the superMarketIsrael array
cartIsrael[1][0] = "caramel"
console.log(cartIsrael); //["shampoo", ["caramel", "vanilla"]];
console.log(superMarketIsrael) //["shampoo", ["chocolate", "vanilla"]];