import React from "react";
import styles from "./LanguageSwitcher.module.sass";
import classNames from "classnames/bind";

const LanguageItem = ({ code, active, onClick }) => {
    return (
        <div className={styles.languagesItem}>
                    <span
                        className={classNames(styles.languageLink, active && styles.languageLink_active)}
                        onClick={active ? null : onClick}
                    >
                        {code.toUpperCase()}
                    </span>
        </div>
    )
}

export default LanguageItem;