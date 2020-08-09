import React, { Component, Fragment } from 'react';

import withWidth from "@material-ui/core/withWidth";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';

import Header from "./header/Header";
import Slider from "./slideshow/Slideshow";
import Brands from "./brands/Brands"
import SpecialOffers from "./special-offers/SpecialOffers";
import AboutCompany from "./about-company/AboutCompany";
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

@withWidth()
class App extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline/>
                <ThemeProvider theme={theme}>
                    <Header/>
                    <Slider/>
                    <Container maxWidth="lg">
                        <Hidden smDown>
                            <Brands/>
                        </Hidden>
                        <SpecialOffers/>
                        <AboutCompany/>
                    </Container>
                    <Hidden smDown>
                        <Footer/>
                    </Hidden>
                    <Hidden mdUp>
                        <MobileFooter/>
                    </Hidden>
                </ThemeProvider>
            </Fragment>
        );
    }
}

export default App;