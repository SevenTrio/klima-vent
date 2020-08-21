import React, { Fragment } from 'react';
import styles from './Logo.module.sass';
import classNames from 'classnames/bind'

import {Translate} from "react-redux-i18n";
import LocalizedLink from "../../localized-link/LocalizedLinkContainer";

const logo = '/images/logo.png';

const Logo = ({ classes }) => {
    return(
        <div className={classNames(styles.root, classes.root)}>
            <LocalizedLink to="/" className={classNames(styles.link, classes.link)}>
                <img src={logo} alt="КлимаВент" className={classNames(styles.image, classes.image)}/>
                <span className={classNames(styles.companyName, classes.companyName)}>
                    <Translate value="company.name"/>
                </span>
            </LocalizedLink>
        </div>
    )
}

export default Logo;