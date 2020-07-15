import React, { Fragment } from 'react';
// import classNames from 'classnames/bind';

import IconButton from "@material-ui/core/IconButton";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import styles from '../sass/MobileMenu.module.sass';

const MobileMenu = () => {
    return(
        <Fragment>
            <IconButton className={styles.mobileMenuButton}>
                <MenuRoundedIcon className={styles.mobileMenuIcon}/>
            </IconButton>
        </Fragment>
    )}

export default MobileMenu;