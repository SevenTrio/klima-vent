import { combineReducers } from 'redux';

import language from "./language"
import city from "./city"
import profile from "./profile"


export default combineReducers({
    language,
    city,
    profile,
});