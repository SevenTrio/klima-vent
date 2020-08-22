import React from 'react';
import styles from './Navigation.module.sass';
import navigationData from "./navigation.data";

import NavigationItem from "./navigation-item/NavigationItem";

const Navigation = () => {
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
