const initialState = {
    id: 123,
    // name: null,
    // lastname: null,
    name: 'Иван',
    lastname: 'Иванов',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                id: action.payload,
                name: 'Иван',
                lastname: 'Иванов',
            };
        default:
            return state;
    }
};