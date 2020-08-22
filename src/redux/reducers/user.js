const initialState = {
    user: {
        id: 123,
        name: 'Иван',
        lastname: 'Иванов',
    },
    authorized: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
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