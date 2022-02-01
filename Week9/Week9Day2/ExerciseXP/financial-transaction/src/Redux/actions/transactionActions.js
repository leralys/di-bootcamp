// Part II : Actions
// In the src folder, create a subfolder named actions, containing a transactionActions.js file, your actions will be:
// type: 'INSERT',
// payload: data

// type: 'UPDATE',
// payload: data   

// type: 'DELETE',
// payload: id

// type: 'UPDATE-INDEX',
// payload: index


export const INSERT = 'INSERT';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const UPDATE_INDEX = 'UPDATE_INDEX';

export const insertTransaction = (data) => {
    return {
        type: INSERT,
        payload: data
    }
}
export const updateTransaction = (data) => {
    return {
        type: UPDATE,
        payload: data
    }
}
export const deleteTransaction = (id) => {
    return {
        type: DELETE,
        payload: id
    }
}
export const updateIndex = (index) => {
    return {
        type: UPDATE_INDEX,
        payload: index
    }
}