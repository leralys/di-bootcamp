// Part III : Reducers
// In the src folder, create a subfolder named reducers, containing a transactionReducer.js file .

// Export a transactionReducer function containing a switch case with the following cases.
// INSERT will push the action payload.
// UPDATE will update the state.currentIndex in the list action payload.
// UPDATE-INDEX will return { list, currentIndex: action.payload }.
// DELETE will splice the list action payload.

// For all of these you can use the localStorage from the browser to have persistance of the data.
import { INSERT, UPDATE, DELETE, UPDATE_INDEX } from '../actions/transactionActions';


let initialState = {
    currentIndex: -1,
    list: JSON.parse(localStorage.getItem('transactions')) || []
}

function transactionReducer(state = initialState, action) {
    switch (action.type) {
        case INSERT:
            return {
                ...state, list: [...state.list, action.payload]
            }
        default:
            return { ...state }
    }
}



export default transactionReducer;