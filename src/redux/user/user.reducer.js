/* The initial State of the Reducer */
const INITIAL_STATE = {
    currentUser: null
}

/* The User Reducer function */
export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}