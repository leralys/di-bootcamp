const initState = {
    users: [],
    searchField: ''
}

export const users_reducers = (state = initState, action = {}) => {
    switch (action.type) {
        case 'expression':
            return { ...state }
        default:
            return { ...state }
    }
}