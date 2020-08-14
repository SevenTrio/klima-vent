import React, { Fragment } from 'react';
import styles from './Catalog.module.sass';

import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import RippleButton from "../../ripple-button/RippleButton";
import {Translate} from "react-redux-i18n";

const Catalog = () => {
    return(
        <Fragment>
            <RippleButton classes={styles.catalogButton}>
                <ViewListRoundedIcon className={styles.catalogButtonIcon}/>
                <Translate value="catalog.catalog"/>
            </RippleButton>
        </Fragment>
    )
}

export default Catalog;