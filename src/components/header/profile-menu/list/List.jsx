import React from "react";
import styles from "./List.module.sass";

import ListItem from "./ListItem";

import {loginProps, userProps} from '../../../../data/profileMenuProps';

const List = ({ authorized }) => {
    const listProps = authorized ? userProps : loginProps;

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