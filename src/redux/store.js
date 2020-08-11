import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import {
    setLocale,
    loadTranslations,
    syncTranslationWithStore,
} from "react-redux-i18n";

import rootReducer from './reducers';
import translations from "../i18n/translations";

const middlewares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale("ru"));

export default store;