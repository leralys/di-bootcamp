import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaSript", votes: 0 },
        { name: "Java", votes: 0 }
      ]
    };
  }
  addVote(idx) {
    let newLanguages = [...this.state.languages]; //copy of array
    newLanguages[idx].votes++; //update vote
    this.setState({ languages: newLanguages }); //set new arr

  }
  render() {
    return (
      <div className='App'>
        {
          this.state.languages.map((el, index) => {
            return (
              <div key={index}>
                <span>{el.votes}</span>
                <span>{el.name}</span>
                <button onClick={this.addVote.bind(this, index)}>Click Here</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default App;
