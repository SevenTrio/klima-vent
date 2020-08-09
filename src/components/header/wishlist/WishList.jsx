import React, { Fragment } from 'react';
import styles from "./WishList.module.sass";

import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const WishList = () => {
    return(
        <Fragment>
            <IconButton className={styles.wishListButton}>
                <FavoriteBorderIcon className={styles.wishListIcon}/>
            </IconButton>
        </Fragment>
    )}

export default WishList;