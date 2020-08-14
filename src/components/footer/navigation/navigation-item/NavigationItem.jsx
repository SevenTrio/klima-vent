import React from 'react';
import styles from './NavigationItem.module.sass';

import ListItem from './list-item/ListItem'
import {Translate} from "react-redux-i18n";

const NavigationItem = ({ item }) => {
    return(
        <div className={styles.root}>
            <p className={styles.title}>
                <Translate value={item.title}/>
            </p>
            <nav>
                <ul className={styles.list}>
                    {
                        item.list.map((listItem, index) =>
                            <ListItem key={index} item={listItem}/>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default NavigationItem;