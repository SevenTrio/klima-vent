import React, { Fragment } from 'react';
// import styles from './Compare.module.sass';

import InDevelopingModal from "./../in-developing-modal/InDevelopingModal";

const Compare = ({ compareOpen, setCompareOpen}) => {
    const handleModalClose = () => {
        setCompareOpen(false);
    };

    return(
        <Fragment>
            {/*TODO: Develop CompareModal*/}
            <InDevelopingModal open={compareOpen} handleClose={handleModalClose}/>
        </Fragment>
    )
}

export default Compare;