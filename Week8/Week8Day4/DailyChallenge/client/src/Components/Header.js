import React, { Component } from 'react';
import axios from 'axios';
const port = 8000;


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { quote: '' };
    }
    componentDidMount() {
        // load data
        axios.get(`http://localhost:${port}/api/hello`).then(responce => {
            this.setState({ serverAnswer: responce.data })
        })
        // set state with that data

    }
    render() {
        return (
            <header>
                <h1>{this.state.serverAnswer}</h1>
            </header>

        )
    }
}



export default Form;