import React, { Fragment } from 'react';
// import styles from "./Wishlist.module.sass";

import InDevelopingModal from "./../in-developing-modal/InDevelopingModal";

const Wishlist = ({wishlistOpen, setWishlistOpen}) => {
    const handleModalClose = () => {
        setWishlistOpen(false);
    };

    return(
        <Fragment>
            {/*TODO: Develop WishListModal*/}
            <InDevelopingModal open={wishlistOpen} handleClose={handleModalClose}/>
        </Fragment>
    )
}

export default Wishlist;