import React from "react";
import styles from "./Code.module.sass";

const Code = ({id}) => {
    return(
        <div className={styles.code}>
            Код товара: {id}
        </div>
    )
}

export default Code;