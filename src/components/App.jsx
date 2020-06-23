// import React, { Component } from 'react';
// import styles from "../sass/App.sass";
// // import { Card, Container } from 'semantic-ui-react';
//
// class App extends Component {
//     componentWillMount() {
//         const { setTests } = this.props;
//         setTests('some test text');
//     }
//
//     render() {
//         const { testText, testNumber } = this.props;
//         return (
//             <div className={styles.app}>
//                 {testText} <br/> {testNumber}
//             </div>
//         );
//     }
// }
//
// export default App;

import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import styles from "../sass/App.sass";

import Header from "../containers/Header";

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: '#757ce8',
            main: '#0067B8',
            // dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            // light: '#ff7961',
            main: '#FF671F',
            // dark: '#ba000d',
            contrastText: '#fff',
        },
    },
});


class App extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <Fragment>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <Header/>
                </ThemeProvider>
            </Fragment>
        );
    }
}

export default App;