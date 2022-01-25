import React, { Component } from 'react';


class Events extends Component {
    constructor() {
        super();
        this.state = { isToggleOn: true };
        this.toggleClick = this.toggleClick.bind(this);
    }
    clickMe = () => {
        alert('I was clicked');
    }
    handleKeyPress(e) {
        console.log(e.key);
        console.log(e.target.value);
        if (e.key == 'Enter') {
            alert(`The Enter key was pressed, your input is ${e.target.value}`)
        }
    }
    toggleClick() {
        if (this.state.isToggleOn) {
            this.setState({ isToggleOn: false })
        } else {
            this.setState({ isToggleOn: true })
        }
    }
    render() {
        return (
            <>
                <button onClick={this.clickMe}>Press To Alert</button>
                <input onKeyPress={this.handleKeyPress} autoComplete='off' placeholder='press Enter key!'></input>
                <button onClick={this.toggleClick}>
                    {this.state.isToggleOn ? 'OFF' : 'ON'}
                </button>
            </>

        )
    }
}

export default Events;