import React from "react";
import styles from "./List.module.sass";

const Logout = () => {
    return(
        <li className={styles.listItem}>
            <a href='/' className={styles.listItem__link}>
                Выход
            </a>
        </li>
    )
}

export default Logout;