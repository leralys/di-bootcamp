import React, { Component } from 'react';
import FormComponent from './FormComponent';

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            age: '',
            gender: '',
            destination: '',
            isNutsFree: false,
            isLactoseFree: false,
            isVegan: false

        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        // const { target: { name, value, checked } } = e;
        const { name, value, checked, type } = e.target;
        type === "checkbox"
            ? this.setState({ [name]: checked })
            : this.setState({ [name]: value });
    }
    render() {
        return (
            <FormComponent handleChange={this.handleChange} {...this.state} />
        );
    }
}

export default FormContainer;