export const setUser = user => ({
    type: "SET_USER",
    payload: user
});

export const removeUser = () => ({
    type: "SET_USER",
    payload: null
});