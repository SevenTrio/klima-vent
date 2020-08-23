import React from 'react';
import styles from './Header.module.sass'

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';

import Telephone from "./telephone/Telephone";
import Logo from "../logo/Logo";
import MobileMenu from "./mobile-menu/MobileMenu";
import Search from "./search/SearchContainer";

import LanguageSwitcher from "./language-switcher/LanguageSwitcher";
import CityButton from "./city-button/CityButtonContainer";
import Profile from "./profile-menu/ProfileMenuContainer";
import Catalog from "./catalog/Catalog";
import CompareButton from "./compare-button/CompareButtonContainer";
import WishlistButton from "./wishlist-button/WishlistButtonContainer";
import CartButton from "./cart-button/CartButtonContainer";

const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Hidden smDown>
                    <div className={styles.headerUpper}>
                        <Telephone/>
                        <LanguageSwitcher/>
                        <CityButton/>
                        <Profile/>
                    </div>
                </Hidden>

                <div className={styles.headerContent}>
                    <Hidden smDown>
                        <Logo classes={{companyName: styles.companyName}}/>
                    </Hidden>
                    <Hidden mdUp>
                        <MobileMenu/>
                    </Hidden>
                    <Hidden smDown>
                        <Catalog/>
                    </Hidden>
                    <Search/>
                    <Hidden smDown>
                        <CompareButton/>
                        <WishlistButton/>
                    </Hidden>
                    <CartButton/>
                </div>
            </Container>
        </AppBar>
    );
}

export default Header;