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

// let transactions = [
//     { accountNo: "Hello", FSC: "d", accHolder: "d", amount: "d" },
//     { accountNo: "yy", FSC: "yy", accHolder: "yy", amount: "yy" }];

// localStorage.setItem('transactions', JSON.stringify(transactions));

const TransactionList = (props) => {
    console.log(props);
    let rows;
    // let list = (JSON.parse(localStorage.getItem('transactions')));
    if (props.list !== null || props.list !== undefined) {
        rows = props.list.map((el, index) => {
            return <tr key={index} id={index}>
                <td className="tableCell">{el.accountNo}</td>
                <td className="tableCell">{el.FSC}</td>
                <td className="tableCell">{el.accHolder}</td>
                <td className="tableCell">{el.amount}</td>
                <td className="tableCell"><button>Edit</button></td>
                <td className="tableCell"><button>Delete</button></td>
            </tr>
        })
    } rows = [];
    console.log(rows);
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

export default connect(mapStateToProps)(TransactionList);