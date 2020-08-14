import React, { Fragment } from 'react';
import styles from './Logo.module.sass';

import Hidden from "@material-ui/core/Hidden";
import {Translate} from "react-redux-i18n";
import LocalizedLink from "../../localized-link/LocalizedLinkContainer";

const logo = '/images/logo.png';

const Logo = () => {
    return(
        <Fragment>
            <LocalizedLink to="/" className={styles.link}>
                <img src={logo} alt="КлимаВент" className={styles.logo}/>
                <Hidden mdDown>
                    <span className={styles.companyName}>
                        <Translate value="company.name"/>
                    </span>
                </Hidden>
            </LocalizedLink>
        </Fragment>
    )
}

export default Logo;