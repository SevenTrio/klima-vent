import React, { Fragment } from 'react';
import styles from './Compare.module.sass';

import IconButton from "@material-ui/core/IconButton";
import CompareIcon from "../../compareIcon/CompareIcon";
import InDevelopingModal from "../../in-developing-modal/InDevelopingModal";

const Compare = ({ compareOpen, setCompareOpen}) => {

    const handleModalOpen = () => {
        setCompareOpen(true);
    };

    const handleModalClose = () => {
        setCompareOpen(false);
    };

    return(
        <Fragment>
            <IconButton className={styles.compareButton} onClick={handleModalOpen}>
                <CompareIcon className={styles.compareIcon}/>
            </IconButton>

            {/*TODO: Develop CompareModal*/}
            <InDevelopingModal open={compareOpen} handleClose={handleModalClose}/>
        </Fragment>
    )
}

export default Compare;