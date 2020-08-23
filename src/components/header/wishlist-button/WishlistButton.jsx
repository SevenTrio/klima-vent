import React, { Fragment } from 'react';
import styles from "./WishlistButton.module.sass";

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';

const WishlistButton = ({ setWishlistOpen }) => {
    return(
        <Fragment>
            <IconButton className={styles.wishListButton} onClick={() => setWishlistOpen(true)}>
                <FavoriteIcon className={styles.wishListIcon}/>
            </IconButton>
        </Fragment>
    )
}

export default WishlistButton;