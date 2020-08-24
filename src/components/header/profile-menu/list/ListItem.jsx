import React from "react";
import styles from "./List.module.sass";

import {Translate} from "react-redux-i18n";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LocalizedLink from "../../../localized-link/LocalizedLinkContainer";

const List = ({ item }) => {
    return(
        <li className={styles.listItem}>
            {
                item.type === 'link' ?
                    <LocalizedLink to={item.url} onClick={item.onClick} className={styles.listItem__link}>
                        <Translate value={item.title}/>
                        { item.withoutIcon ? null : <ArrowForwardIosIcon className={styles.listItem__icon}/> }
                    </LocalizedLink>
                :
                    <div onClick={item.onClick} className={styles.listItem__link}>
                        <Translate value={item.title}/>
                        { item.withoutIcon ? null : <ArrowForwardIosIcon className={styles.listItem__icon}/> }
                    </div>
            }

        </li>
    )
}

export default List;