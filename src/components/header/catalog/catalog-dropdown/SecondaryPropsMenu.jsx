import React from "react";
import styles from "./CatalogDropdown.module.sass";

import classNames from "classnames/bind";
import LocalizedLink from "../../../localized-link/LocalizedLinkContainer";

const SecondaryPropsMenu = ({ items }) => {
    return(
        <div className={classNames(styles.menu, styles.menu_additional)}>
            <ul className={styles.menu__list}>
                {items.map((item, index) =>
                    <li key={index} className={styles.menu__listItem}>
                        <LocalizedLink to={item.link} className={styles.listItem__link}>
                            {item.name}
                        </LocalizedLink>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default SecondaryPropsMenu;