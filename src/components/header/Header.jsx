import React, { Component } from 'react';
import styles from './Header.module.sass'

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';

import Telephone from "./telephone/Telephone";
import Logo from "./logo/Logo";
import MobileMenu from "./mobile-menu/MobileMenu";
import Search from "./search/Search";

import Languages from "./languages/LanguagesContainer";
import City from "./city/CityContainer";
import Profile from "./profile/ProfileContainer";
import Catalog from "./catalog/CatalogContainer";
import Compare from "./compare/CompareContainer";
import WishList from "./wishlist/WishListContainer";
import Cart from "./cart/CartContainer";

class Header extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Hidden smDown>
                        <div className={styles.headerUpper}>
                            <Telephone/>
                            <Languages/>
                            <City/>
                            <Profile/>
                        </div>
                    </Hidden>

                    <div className={styles.headerContent}>
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