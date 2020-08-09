import React from "react";
import styles from "./List.module.sass";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const List = ({ item }) => {
    return(
        <li className={styles.listItem}>
            <a href={item.url} className={styles.listItem__link}>
                {item.label}
                <ArrowForwardIosIcon className={styles.listItem__icon}/>
            </a>
        </li>
    )
}

export default List;