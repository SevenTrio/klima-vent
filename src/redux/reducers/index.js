import { combineReducers } from 'redux';
import { i18nReducer } from "react-redux-i18n";

import city from "./city"
import profile from "./profile"

export default combineReducers({
    i18n: i18nReducer,
    city,
    profile
});