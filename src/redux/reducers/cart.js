const initialState = {
    open: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_CART_OPEN":
            return {
                ...state,
                open: action.payload
            };

        default:
            return state;
    }
};