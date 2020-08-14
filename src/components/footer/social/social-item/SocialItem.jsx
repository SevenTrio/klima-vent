import React from "react";
import styles from "./SocialItem.module.sass";


const SocialItem = ({ item }) => {
    const {icon: Icon} = item;

    return(
        <li className={styles.root}>
            <a href={item.url} className={styles.link}>
                <div className={styles.iconWrapper}>
                    <Icon className={styles.icon}/>
                </div>
            </a>
        </li>
    )
}

export default SocialItem;