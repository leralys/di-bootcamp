// Exercise 1 : Car And Components
// Instructions
// Part I : A Car Component
// In Ap  
// In your React app create a new folder in the src path, name it Components.
// It should contain a Class Component named Car.js.
// In the Car.js component render a header with the carInfo model,
// for example This car is <model>.
// Import the Car.js component to the App.js.
// Part II : A constructor function
// Create a constructor function in the Car component, and add a color property in the state.
// Display the color property in the render() method, for example This car is <color> <model>.
// Part III : Garage
// Create another component inside your Components folder, called Garage.js.
// Use an attribute to pass a size to the Garage component, <Garage size="small" />.
// Use the Garage component inside the Car component and pass the size ‘small’.
// The Garage component should render Who lives in my <size> Garage?



// Exercise 2 : Events
// Instructions
// Part I:
// Create a new Class component named Events.
// Create an arrow function called clickMe. It should alert the string ‘I was clicked’.
// In the render() method, create a button that when clicked on, calls the clickMe function.
// Tip: Use event handler.
// Where should you create the clickMe function ?
// In the render() method of the Events Class component, create an input tag
// that has an onKeyPress event handler, that listens to a function called handleKeyPress.
// Part III:
// In the Events Class component, declare a property in the state object named isToggleOn
// and set it to true.
// In the render() method, create a button that has an onClick event that will switch the state property between ‘ON’ and ‘OFF’
// Create a function that will be called by the onClick event handler. In the function you should toggle the value of the isToggleOn property.


// Exercise 3 : Phone And Components
// Instructions
// Part I : Phone
// Create a new Class Component named Phone. Use constructor, super(),
// and a state object with the following properties:
// In the render method of the Phone component, display the values of the state properties.
// Tip: this.state.propertyname
// Import the Phone component and display it in your App.js.


// Exercise 4 : ComponentDidMount
// Instructions
// Create a new Class Component named Color.
// The state object of this component contains a property favoriteColor which value is “red”.
// Output the value in a header tag.
// Note : The componentDidMount() method is called after the component is rendered.
// Use the componentDidMount() method to call a timeout function, that changes the state of the favoriteColor property to “yellow” after 5 seconds.
// Note: The render() method is called when a component gets updated. It re-renders the DOM, with the new changes.
// Create a button that when clicked on, calls a function that changes the value of the favoriteColor property to “blue”.




import './App.css';
import Car from './Components/Car';
import Garage from './Components/Garage';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };
  const { name, model } = carinfo;
  return (
    <div className="App">
      <header className='App-header'>
        < Garage size={'small'} />
        < Car name={name} model={model} color={'blue'} />
        <Events />
        <Phone />
        <Color/>
      </header>
    </div>
  );
}



export default App;

