import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';

// import components
import Telephone from "./Telephone";

// import containers
import Languages from "../containers/Languages";
import City from "../containers/City";
import Profile from "../containers/Profile";
import Catalog from "../containers/Catalog";
import Search from "../containers/Search";
import Compare from "../containers/Compare";
import WishList from "../containers/WishList";
import Cart from "../containers/Cart";

const logo = require('../images/logo.png');

const myStyles = (theme) => ({
    headerUpper: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: 8,
        fontSize: 12,
        lineHeight: '14px',
        letterSpacing: 'normal',
    },
    headerContent: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
    },
    logo: {
        width: 40,
        height: 40,
    },
    companyName: {
        fontSize: 28,
        // lineHeight: '30px',
        fontWeight: 700,
        fontStyle: 'italic',
        // color: theme.palette.primary.contrastText,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
})

@withStyles(myStyles)
class Header extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <AppBar position="static">
                <Container maxWidth="lg" className={this.props.classes.headerUpper}>
                    <Telephone/>
                    <Languages/>
                    <City/>
                    <Profile/>
                </Container>
                <Container maxWidth="lg" className={this.props.classes.headerContent}>
                    <img src={logo} alt="КлимаВент" className={this.props.classes.logo}/>
                    <span className={this.props.classes.companyName}>КлимаВент</span>
                    <Catalog/>
                    <Search/>
                    <Compare/>
                    <WishList/>
                    <Cart/>
                </Container>
            </AppBar>
        );
    }
}

export default Header;