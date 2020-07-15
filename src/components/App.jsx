import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import "../sass/main.sass";

import Header from "../containers/Header";
import withWidth from "@material-ui/core/withWidth";

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
    componentWillMount() {

    }

    render() {
        return (
            <Fragment>
                <CssBaseline/>
                <ThemeProvider theme={theme}>
                    <Header/>
                </ThemeProvider>
            </Fragment>
        );
    }
}

export default App;