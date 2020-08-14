import React from "react";
import styles from "./Code.module.sass";
import {Translate} from "react-redux-i18n";

const Code = ({id}) => {
    return(
        <div className={styles.code}>
            <Translate value="product.code" code={id}/>
        </div>
    )
}

export default Code;