import React from "react";
import styles from './MobileLanguageSwitcher.module.sass'

import {supportedLocales} from "../../../../../i18n/i18n.config";
import {NavLink} from "react-router-dom";

const MobileLanguageSwitcher = () => {
    return(
        <div className={styles.root}>
            {
                Object.keys(supportedLocales).map((code, index) => {
                    let path = document.location.pathname;
                    let pathArr = path.split('/');
                    pathArr[1] = code.toLowerCase();
                    path = pathArr.join('/');

                    return(
                        <div key={index} className={styles.languagesItem}>
                            <NavLink to={path} className={styles.languageLink} activeClassName={styles.languageLink_active}>
                                {code.toUpperCase()}
                            </NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MobileLanguageSwitcher;