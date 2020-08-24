import { v4 as uuid } from 'uuid';

const initialState = {
    user: {
        id: null,
        name: '',
        lastname: '',
    },
    authorized: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: {
                    id: action.payload.id || uuid(),
                    name: action.payload.name,
                    lastname: action.payload.lastname || ''
                },
                authorized: true
            };

        case "REMOVE_USER":
            return {
                ...state,
                user: initialState.user,
                authorized: false,
            };

        default:
            return state;
    }
};