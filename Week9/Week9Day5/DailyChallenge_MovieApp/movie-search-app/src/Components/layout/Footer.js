import React, { Component } from 'react';
import Button from './Button';

class Footer extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(name) {
        console.log(name);
    }
    render() {
        const name = 'name';
        return (
            <>
                <h1>THIS IS FOOTER</h1>
            </>
        )
    }
}
export default Footer