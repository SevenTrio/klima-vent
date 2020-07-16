import React, { Fragment } from 'react';
// import classNames from 'classnames/bind';

import styles from '../sass/Logo.module.sass';
import Hidden from "@material-ui/core/Hidden";

const logo = require('../images/logo.png');

const Logo = () => {
    return(
        <Fragment>
            <a href="/" className={styles.link}>
                <img src={logo} alt="КлимаВент" className={styles.logo}/>
                <Hidden mdDown>
                    <span className={styles.companyName}>КлимаВент</span>
                </Hidden>
            </a>
        </Fragment>
    )}

export default Logo;