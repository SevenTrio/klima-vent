import React, { Fragment } from 'react';
import styles from './Catalog.module.sass';

import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import RippleButton from "../../ripple-button/RippleButton";

const Catalog = () => {
    return(
        <Fragment>
            <RippleButton classes={styles.catalogButton}>
                <ViewListRoundedIcon className={styles.catalogButtonIcon} />
                Каталог товаров
            </RippleButton>
        </Fragment>
    )
}

export default Catalog;