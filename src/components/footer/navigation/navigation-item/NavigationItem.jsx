import React from 'react';
import styles from './NavigationItem.module.sass';

import ListItem from './list-item/ListItem'

const NavigationItem = ({ item }) => {
    console.log(item);
    return(
        <div className={styles.root}>
            <p className={styles.title}>{item.title}</p>
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