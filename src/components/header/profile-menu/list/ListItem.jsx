import React from "react";
import styles from "./List.module.sass";

import {Translate} from "react-redux-i18n";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LocalizedLink from "../../../localized-link/LocalizedLinkContainer";

const List = ({ item }) => {
    return(
        <li className={styles.listItem}>
            <LocalizedLink to={item.url} className={styles.listItem__link}>
                <Translate value={item.title}/>
                { item.withoutIcon ? null : <ArrowForwardIosIcon className={styles.listItem__icon}/> }
            </LocalizedLink>
        </li>
    )
}

export default List;