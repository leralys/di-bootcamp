import React, { Component } from 'react';
import axios from 'axios';
const port = 8000;


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userMessage: '',
            serverAnswer: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        // console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        const { userMessage } = this.state;
        if (userMessage !== '') {
            fetch(`http://localhost:${port}/api/world`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ userMessage })
            })
                .then(responce => responce.json())
                .then(data => {
                    this.setState({ serverAnswer: data.serverAnswer });
                })
                .catch(err => console.log(err))
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Post to server:</h2>
                    <br />
                    <input onChange={this.handleChange} type="text" name="userMessage" autoComplete='off' />
                    <button type="submit">Send</button>
                </form >
                <p>{this.state.serverAnswer}</p>
            </div>

        )
    }
}

export default Form;