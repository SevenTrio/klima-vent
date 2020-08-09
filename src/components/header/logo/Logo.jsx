import React, { Fragment } from 'react';
import styles from './Logo.module.sass';

import Hidden from "@material-ui/core/Hidden";

const logo = '/images/logo.png';

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
    )
}

export default Logo;