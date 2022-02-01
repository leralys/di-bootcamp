// Part I : Components
// In the src folder, create a subfolder named components.
// Add a TransactionForm.js file which will have a state with the properties : accountNumber, FSC, name and amount.
// Render a form with four inputs and a submit button.
// Use handleInputChange and handleSubmit functions for the form functionality.
// Use mapStateToProps to return the state.list(ie. the list of transations) and the state.currentIndex (ie. the current transaction).
// Use mapDispatchToProps for the actions.insert and actions.update actions.
// Use the connect() function from redux.

import { connect } from 'react-redux';


function TransactionForm() {
    return (
        <form>
            <input type="text" name="accountNumber" placeholder="Account Number" autoComplete="off" />
            <br />
            <input type="text" name="FSC" placeholder="FSC" autoComplete="off" />
            <br />
            <input type="text" name="ACHolderName" placeholder="A/C Holder Name" autoComplete="off" />
            <br />
            <input type="text" name="amount" placeholder="Amount" autoComplete="off" />
            <br />
            <button type="submit">Submit</button>
        </form >
    );
}

export default TransactionForm;





