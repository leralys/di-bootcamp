import React, { Component } from 'react';
import './App.css';
import Select from './Components/Select';
// import SelectCity from './Components/SelectCity';


class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      cities: [],
      isLoaded: false
    }
    this.handleChange = this.handleChange.bind(this);
  }
  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:5500/api/countries');
      const data = await res.json();
      this.setState({ countries: data, isLoaded: true });
    } catch (err) {
      console.log(err);
    }
  }
  async handleChange(e) {
    // console.log(e.target.value);
    try {
      const res = await fetch(`http://localhost:5500/api/cities/${e.target.value}`);
      const data = await res.json();
      this.setState({ cities: data });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className="App">
        {!this.state.isLoaded
          ? <h1>Loading</h1>
          : <Select arr={this.state.countries}
            handleChange={this.handleChange} />
        }
        {this.state.cities.length !== 0 &&
          <Select arr={this.state.cities} />
        }
      </div>
    );
  }
}

export default App;
