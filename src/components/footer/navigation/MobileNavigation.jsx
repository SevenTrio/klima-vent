import React from 'react';
import styles from './Navigation.module.sass';
import footerNavigationData from "../../../data/footerNavigationData";


import MobileNavigationItem from "./navigation-item/MobileNavigationItem";

const MobileNavigation = () => {
    return(
        <div className={styles.root}>
            {
                footerNavigationData.map((navigationItem, index) =>
                    <MobileNavigationItem key={index} item={navigationItem}/>
                )
            }
        </div>
    )
}

export default MobileNavigation;
