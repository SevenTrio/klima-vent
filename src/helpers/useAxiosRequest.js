import React from 'react';
import axios from 'axios'

const defaultState = {
    responseData: null,
    isFetching: true,
    error: null
};

function reducer(state, action) {
    switch (action.type) {
        case "fetched":
            return {
                ...state,
                isFetching: false,
                responseData: action.payload
            };
        case "error":
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}

const useAxiosRequest = (url) => {
    const [state, dispatch] = React.useReducer(reducer, defaultState);

    React.useEffect(() => {
        const source = axios.CancelToken.source();
        axios
            .get(url, {
                cancelToken: source.token
            })
            .then(response => {
                // console.log(response.data)
                dispatch({ type: "fetched", payload: response.data });
            })
            .catch(error => {
                dispatch({ type: "error", payload: error });
            });
        return source.cancel;
    }, [url]);

    return [state];
};

export default useAxiosRequest;