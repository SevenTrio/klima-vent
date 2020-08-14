import React from "react";
import styles from "./ListItem.module.sass";
import {Translate} from "react-redux-i18n";
import LocalizedLink from "../../../../localized-link/LocalizedLinkContainer";

const ListItem = ({ item }) => {
    return(
        <li className={styles.root}>
            <LocalizedLink to={item.link} className={styles.link}>
                <Translate value={item.name}/>
            </LocalizedLink>
        </li>
    )
}

export default ListItem;