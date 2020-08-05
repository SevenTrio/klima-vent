import React from "react";
import styles from "./ListItem.module.sass";

const ListItem = ({ item }) => {
    return(
        <li className={styles.root}>
            <a href={item.url} className={styles.link}>
                {item.name}
            </a>
        </li>
    )
}

export default ListItem;