import React from "react";
import styles from './MobileCatalog.module.sass'

import ViewListRoundedIcon from "@material-ui/icons/ViewListRounded";
import {Translate} from "react-redux-i18n";

const MobileCatalog = () => {
    return (
        <div className={styles.root}>
            <div className={styles.button}>
                <ViewListRoundedIcon className={styles.button__icon}/>
                <Translate value="catalog.catalog"/>
            </div>
        </div>
    )
}

export default MobileCatalog;