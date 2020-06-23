const initialState = {
    text: 'initial text',
    num: 456
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_TESTS":
            return {
                ...state,
                text: action.payload,
                num: 123
            };
        default:
            return state;
    }
};