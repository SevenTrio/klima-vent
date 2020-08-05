import React from 'react';
import styles from './Navigation.module.sass';
import navigationData from "../../../data/navigationData";


import MobileNavigationItem from "./navigation-item/MobileNavigationItem";

const MobileNavigation = () => {
    return(
        <div className={styles.root}>
            {
                navigationData.map((navigationItem, index) =>
                    <MobileNavigationItem key={index} item={navigationItem}/>
                )
            }
        </div>
    )
}

export default MobileNavigation;
