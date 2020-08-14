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
import { fallbackLocale } from "../i18n/i18n.config"

const middlewares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale(fallbackLocale));

export default store;