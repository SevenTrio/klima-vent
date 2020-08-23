import React from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom'
import routes from '../routes'

import withWidth from "@material-ui/core/withWidth";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';

import ScrollToTop from "./scroll-to-top/ScrollToTop";
import LanguageInspector from "./language-inspector/LanguageInspectorContainer";

import City from "./city/CityContainer";
import Cart from "./cart/CartContainer";
import Compare from "./compare/CompareContainer";
import Wishlist from "./wishlist/WishlistContainer";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MobileFooter from "./footer/MobileFooter";

import "../sass/main.sass";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0067B8',
            contrastText: '#fff',
        },
        secondary: {
            main: '#FF671F',
            contrastText: '#fff',
        },
        background: {
            default: '#f2f2f2',
        },
        text: {
            primary: '#303030',
        }
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            // xl: 1920,
        },
    },
});

const App = () => {
    return (
        <Router>
            <ScrollToTop/>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <City/>
                <Cart/>
                <Compare/>
                <Wishlist/>
                <Header/>

                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(routeProps) =>
                                    <LanguageInspector component={route.component} isRedirect={route.isRedirect} locale={routeProps.match.params.locale}/>
                                }
                            />
                        ))}
                    </Switch>

                <Hidden smDown>
                    <Footer/>
                </Hidden>
                <Hidden mdUp>
                    <MobileFooter/>
                </Hidden>
            </ThemeProvider>
        </Router>
    );
}

export default withWidth()(App);