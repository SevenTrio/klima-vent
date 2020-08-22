import React, { Fragment } from 'react';
import styles from "./WishList.module.sass";

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import InDevelopingModal from "../../in-developing-modal/InDevelopingModal";

const WishList = ({wishlistOpen, setWishlistOpen}) => {
    
    const handleModalOpen = () => {
        setWishlistOpen(true);
    };

    const handleModalClose = () => {
        setWishlistOpen(false);
    };

    return(
        <Fragment>
            <IconButton className={styles.wishListButton} onClick={handleModalOpen}>
                <FavoriteIcon className={styles.wishListIcon}/>
            </IconButton>

            {/*TODO: Develop WishListModal*/}
            <InDevelopingModal open={wishlistOpen} handleClose={handleModalClose}/>
        </Fragment>
    )
}

export default WishList;