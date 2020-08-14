import React from 'react';
import styles from './Navigation.module.sass';

import NavigationItem from "./navigation-item/NavigationItem";

import footerNavigationData from "../../../data/footerNavigationData";

const Navigation = () => {
    return(
        <div className={styles.root}>
            {
                footerNavigationData.map((navItem, index) =>
                    <NavigationItem key={index} item={navItem}/>
                )
            }
        </div>
    )
}

export default Navigation;
