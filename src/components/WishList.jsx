import React, {Fragment} from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import styles from "../sass/WishList.module.sass";

const WishList = () => {
    return(
        <Fragment>
            <FavoriteBorderIcon className={styles.wishListIcon}/>
        </Fragment>
    )}

export default WishList;