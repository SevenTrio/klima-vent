import React, {Fragment} from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import styles from "../sass/WishList.module.sass";

const WishList = () => {
    return(
        <Fragment>
            <IconButton className={styles.wishListButton}>
                <FavoriteBorderIcon className={styles.wishListIcon}/>
            </IconButton>
        </Fragment>
    )}

export default WishList;