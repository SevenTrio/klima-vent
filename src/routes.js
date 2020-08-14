import React from 'react'
import { Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from "./pages/NotFound";
import { fallbackLocale } from './i18n/i18n.config'
import { localizeRoutes } from './i18n/i18n.utils'

const routes = [
    {
        path: "/",
        exact: true,
        localize: false,
        isRedirect: true,
        component: () => <Redirect to={`/${fallbackLocale}`} />
    },
    {
        path: "/login",
        exact: true,
        component: Login
    },
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "*",
        localize: false,
        component: NotFound
    }
];

export default localizeRoutes(routes)