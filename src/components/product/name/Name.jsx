import React from "react";
import styles from "./Name.module.sass";
import {Translate} from "react-redux-i18n";

const Name = ({name}) => {
    return(
        <p className={styles.name}>
            {/*костыль*/}
            <Translate value={name}/>
        </p>
    )
}

export default Name;