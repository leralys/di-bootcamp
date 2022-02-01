// Part I : Components
// In the src folder, create a subfolder named components.
// Add a TransactionForm.js file which will have a state with the properties : accountNumber, FSC, name and amount.
// Render a form with four inputs and a submit button.
// Use handleInputChange and handleSubmit functions for the form functionality.
// Use mapStateToProps to return the state.list(ie. the list of transations) and the state.currentIndex (ie. the current transaction).
// Use mapDispatchToProps for the actions.insert and actions.update actions.
// Use the connect() function from redux.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { insertTransaction } from '../Redux/actions/transactionActions';

// {accountNo: 'Hello', FSC: 'd', accHolder: 'd', amount: 'd'}

class TransactionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountNo: '',
            FSC: '',
            accHolder: '',
            amount: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.insertTransaction(this.state);
        this.setState({ accountNo: '', FSC: '', accHolder: '', amount: '' })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleInputChange}
                    type="text" name="accountNo" placeholder="Account Number"
                    autoComplete="off" value={this.state.accountNo} />
                <br />
                <input onChange={this.handleInputChange}
                    type="text" name="FSC" placeholder="FSC"
                    autoComplete="off" value={this.state.FSC} />
                <br />
                <input onChange={this.handleInputChange}
                    type="text" name="accHolder" placeholder="A/C Holder Name"
                    autoComplete="off" value={this.state.accHolder} />
                <br />
                <input onChange={this.handleInputChange}
                    type="text" name="amount" placeholder="Amount"
                    autoComplete="off" value={this.state.amount} />
                <br />
                <button type="submit">Submit</button>
            </form >
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        insertTransaction: (transaction) => dispatch(insertTransaction(transaction))
    }
}

export default connect(null, mapDispatchToProps)(TransactionForm);





