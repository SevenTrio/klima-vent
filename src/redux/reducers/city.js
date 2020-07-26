const initialState = {
    currentCityId: 2,
    sitiesList: [
        { id: 0, name: 'Киев' },
        { id: 1, name: 'Днепр' },
        { id: 2, name: 'Харьков' },
        { id: 3, name: 'Павлоград' },
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_CITY":
            return {
                ...state,
                currentCityId: action.payload,
            };
        default:
            return state;
    }
};