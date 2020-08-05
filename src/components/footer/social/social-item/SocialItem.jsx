import React from "react";
import styles from "./SocialItem.module.sass";


const SocialItem = ({ item }) => {
    return(
        <li className={styles.root}>
            <a href={item.url} className={styles.link}>
                <div className={styles.icon}>
                    {item.icon}
                </div>
            </a>
        </li>
    )
}

export default SocialItem;