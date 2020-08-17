const initialState = {
    currentCity: {
        id: "115",
        parent_id: "5",
        name: "Киев",
        areas: [ ]
    },
    citiesList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_CITY":
            return {
                ...state,
                currentCity: action.payload
            };
        case "SET_CITIES-LIST":
            return {
                ...state,
                citiesList: action.payload
            };
        default:
            return state;
    }
};