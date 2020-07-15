import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';

// import my components
import Telephone from "./Telephone";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

// import my containers
import Languages from "../containers/Languages";
import City from "../containers/City";
import Profile from "../containers/Profile";
// import MobileMenu from "../containers/MobileMenu";
import Catalog from "../containers/Catalog";
import Search from "../containers/Search";
import Compare from "../containers/Compare";
import WishList from "../containers/WishList";
import Cart from "../containers/Cart";

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
                            <Logo/>
                        </Hidden>
                        <Hidden mdUp>
                            <MobileMenu/>
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

export default Header;