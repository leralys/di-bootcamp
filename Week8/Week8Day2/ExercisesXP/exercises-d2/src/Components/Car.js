import React, { Component } from "react";


// const Car = (props) => {
//     const { model } = props;
//     return (
//         <h1>This car is {model}</h1>
//     );
// };


class Car extends Component {
    constructor(props) {
        super();
        this.state = {
            color: ''
        };
    };
    render() {
        return (
            <p>This car is {this.props.color} {this.props.model}</p>
        )
    }
}



export default Car;

