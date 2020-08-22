import React from "react";
import styles from "./List.module.sass";

import ListItem from "./ListItem";

const List = ({ listProps }) => {
    return(
        <ul className={styles.root}>
            {
                listProps.map((listItem, index) =>
                    <ListItem key={index} item={listItem}/>
                )
            }
        </ul>
    )
}

export default List;