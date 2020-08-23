import React, { Fragment } from 'react';
import styles from './CompareButton.module.sass';

import IconButton from "@material-ui/core/IconButton";
import CompareIcon from "../../compare-icon/CompareIcon";

const CompareButton = ({  setCompareOpen}) => {
    return(
        <Fragment>
            <IconButton className={styles.compareButton} onClick={() => setCompareOpen(true)}>
                <CompareIcon className={styles.compareIcon}/>
            </IconButton>
        </Fragment>
    )
}

export default CompareButton;