import React, { Component } from 'react';

// components
import Header from './Components/layout/Header';
import SearchContainer from './Components/SearchContainer';
// styles
import './App.css';

import APIKey from './APIKey';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      data: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  async handleClick() {
    // console.log('clicked');
    const { searchText } = this.state;
    try {
      const responce = await fetch(`https://www.omdbapi.com/?apikey=${APIKey}&s=${searchText}`);
      const data = await responce.json();
      this.setState({ data: data.Search });
    } catch (err) {
      console.log(err);
    }
  }
  handleChange(e) {
    // console.log(e.target.value);
    this.setState({ searchText: e.target.value });
  }
  handleKeyPress(e) {
    if (e.key == 'Enter') {
      this.handleClick();
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchContainer
          handleClick={this.handleClick}
          handleChange={this.handleChange}
          handleKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}

export default App;

// https://www.omdbapi.com/?apikey=${APIKey}&s=${text}