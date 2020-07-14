import React, { Fragment } from 'react';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
// import classNames from 'classnames/bind';

import RippleButton from "./RippleButton";

import styles from '../sass/Catalog.module.sass';

const Catalog = () => {

    return(
        <Fragment>
            <RippleButton classes={styles.catalogButton}>
                <ViewListRoundedIcon className={styles.catalogButtonIcon} /> Каталог товаров
            </RippleButton>
        </Fragment>
    )}

export default Catalog;