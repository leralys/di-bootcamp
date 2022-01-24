// import UserFavoriteColors from "./UserFavoriteColors";
import Tags from "./Exercise4";

// Exercise 1 : No JSX
// Instructions
// Create an element without JSX and render it. The element should be an <h1>
// with the content “I do not use JSX”

// function App() {
//   return (
//     <div className="App">
//       <h1>I do not use JSX</h1>
//     </div>
//   );
// }


// Exercise 2: With JSX
// Instructions
// Display a “Hello World!” message on the page.
// Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;,
// and render it on the page.
// Create a constant variable named sum, which value is 5 + 5. Render on the page,
// the following sentence "React is <sum> times better with JSX"


// function App() {
//   const myelement = <h1>I Love JSX!</h1>;
//   const sum = 5 + 5;
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <div>{myelement}</div>
//       <p>React is {sum} times better with JSX</p>
//     </div>
//   );
// }


// Exercise 3 : Object
// Instructions
// Using the following object:

// Exercise 3 : Object
// Instructions
// Using the following object:

// In the React App, render the first name and the last name of the user in two <h3>.
// In a separate Javascript file, create a new Component called UserFavoriteColors.
// Use props to pass the fav_animals array to the UserFavoriteColors component.
// In the UserFavoriteColors component, use the map function to create a new array of<li>‘s.
// Each <li> corresponds to one animal from the fav_animals array.
// Display the <li>‘s. Tip : You can use the second parameter of the map function
// as a key to uniquely identify each HTML item


// const user = {
//   first_name: "Bob",
//   last_name: "Dylan",
//   fav_animals: ["Horse", "Turtle", "Elephant", "Monkey"],
// };

// function App() {
//   return (
//     <>
//       <UserFavoriteColors animals={user.fav_animals} />
//     </>
//   );
// }




// Exercise 4 : HTML Tags In React
// Instructions

// In a separate Javascript file, create a new Component called Exercise4 that contains some HTML tags.
// create a <h1> tag and set its color to red, and the background color to lightblue.
// create a paragraph, a link, a form, an image and a list.
// Import Exercise4 to the App.js file and display it.
// PART III:

// Create a new css file named Exercise4.css and import it in your Exercise4 component.
// Add the following CSS properties to the CSS file, and apply them to the paragraph tag:



function App() {
  return (
    <Tags />
  );
}




export default App;