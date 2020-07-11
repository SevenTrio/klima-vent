import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Header from "../containers/Header";

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
    }
});

console.log(theme.palette);

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