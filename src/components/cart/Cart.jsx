import React, { Fragment } from 'react';
// import styles from "./Cart.module.sass";

import InDevelopingModal from "./../in-developing-modal/InDevelopingModal";

const Cart = ({ cartOpen, setCartOpen }) => {
    const handleModalClose = () => {
        setCartOpen(false);
    };

    return(
        <Fragment>
            {/*TODO: Develop CartModal*/}
            <InDevelopingModal open={cartOpen} handleClose={handleModalClose}/>
        </Fragment>
    )
}

export default Cart;