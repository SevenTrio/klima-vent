import React from "react";
import styles from "./LanguageSwitcher.module.sass";
import { NavLink } from "react-router-dom";

const LanguageItem = ({ code  }) => {
    let path = document.location.pathname;
    let pathArr = path.split('/');
    pathArr[1] = code.toLowerCase();
    path = pathArr.join('/');

    return (
        <div className={styles.languagesItem}>
            <NavLink to={path} className={styles.languageLink} activeClassName={styles.languageLink_active}>{code.toUpperCase()}</NavLink>
        </div>
    )
}

export default LanguageItem;