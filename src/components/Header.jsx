import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';

// import my components
import Telephone from "./Telephone";

// import my containers
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
        marginTop: 8,
        fontSize: 12,
        lineHeight: '14px',
        letterSpacing: 'normal',
    },
    headerContent: {
        display: 'flex',
        height: 72,
        alignItems: 'center',
        // paddingTop: 16,
        // paddingBottom: 16,
    },
    logo: {
        width: 40,
        height: 40,
    },
    companyName: {
        marginLeft: 8,
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
@withWidth()
class Header extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Hidden smDown>
                        <div className={this.props.classes.headerUpper}>
                            <Telephone/>
                            <Languages/>
                            <City/>
                            <Profile/>
                        </div>
                    </Hidden>

                    <div className={this.props.classes.headerContent}>
                        <Hidden smDown>
                            <img src={logo} alt="КлимаВент" className={this.props.classes.logo}/>
                        </Hidden>
                        <Hidden mdDown>
                            <span className={this.props.classes.companyName}>КлимаВент</span>
                        </Hidden>
                        <Hidden smDown>
                            <Catalog/>
                        </Hidden>
                        <Search/>
                        <Hidden smDown>
                            <Compare/>
                            <WishList/>
                        </Hidden>
                        <Cart/>
                    </div>
                </Container>
            </AppBar>
        );
    }
}

Header.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']).isRequired,
};

export default Header;