import { combineReducers } from 'redux';
import { i18nReducer } from "react-redux-i18n";

import cart from "./cart";
import city from "./city"
import compare from "./compare";
import user from "./user"
import wishlist from "./wishlist";

export default combineReducers({
    i18n: i18nReducer,
    cart,
    city,
    compare,
    user,
    wishlist
});