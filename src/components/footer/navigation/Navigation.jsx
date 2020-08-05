import React from 'react';
import styles from './Navigation.module.sass';

import NavigationItem from "./navigation-item/NavigationItem";

import navigationData from "../../../data/navigationData";

const Navigation = () => {
    console.log(navigationData)
    return(
        <div className={styles.root}>
            {
                navigationData.map((navItem, index) =>
                    <NavigationItem key={index} item={navItem}/>
                )
            }
        </div>
    )
}

export default Navigation;
