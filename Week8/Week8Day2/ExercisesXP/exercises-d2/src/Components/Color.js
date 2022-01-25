import React, { Component } from "react";

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = { favoriteColor: 'red' };
        this.changeColor = this.changeColor.bind(this);
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow' });
        }, 5000);
    }
    changeColor() {
        this.setState({ favoriteColor: 'blue' });
    }
    render() {
        return <header>
            <h1>My favorite color is {this.state.favoriteColor}</h1>
            <button onClick={this.changeColor}>Change color</button>
        </header>
    }
}


export default Color;