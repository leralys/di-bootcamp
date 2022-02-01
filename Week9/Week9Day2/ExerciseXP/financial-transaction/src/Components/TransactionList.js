// In the components folder, add a TransactionList.js file.
// Import the TransactionForm component to render it.
// You will render the list of transactions in a table using the map function
//     Create two buttons, one for editing and another for deleting.
// Create the functionalities with handleEdit and handleDelete functions.
// Use mapStateToProps to return the state.list.
// Use mapDispatchToProps for the actions.updateIndex and actions.delete actions.
// Use the connect() function from redux.
// Render the TransactionList component in App.js.

import React, { Component } from 'react';
import TransactionForm from './TransactionForm';
import './TransactionList.css';
import { connect } from 'react-redux';
import { deleteTransaction, updateTransaction } from '../Redux/actions/transactionActions';

// let transactions = [
//     { accountNo: "Hello", FSC: "d", accHolder: "d", amount: "d" },
//     { accountNo: "yy", FSC: "yy", accHolder: "yy", amount: "yy" }];

// localStorage.setItem('transactions', JSON.stringify(transactions));

const TransactionList = (props) => {
    let rows;
    // let list = (JSON.parse(localStorage.getItem('transactions')));
    if (props.list.length > 0) {
        rows = props.list.map((el, index) => {
            return <tr key={index} id={index}>
                <td className="tableCell">{el.accountNo}</td>
                <td className="tableCell">{el.FSC}</td>
                <td className="tableCell">{el.accHolder}</td>
                <td className="tableCell">{el.amount}</td>
                <td className="tableCell"><button onClick={() => props.handleUpdate(index)}>Edit</button></td>
                <td className="tableCell"><button onClick={() => props.handleDelete(index)}>Delete</button></td>
            </tr>
        })
    } else rows = [];
    return (
        <>
            <TransactionForm />
            <hr />
            {rows.length > 0 &&
                <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            }
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleDelete: (index) => dispatch(deleteTransaction(index)),
        handleUpdate: (index) => dispatch(updateTransaction(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);