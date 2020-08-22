import React, { Fragment } from 'react';
import styles from "./Cart.module.sass";

import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import InDevelopingModal from "../../in-developing-modal/InDevelopingModal";

const Cart = ({ cartOpen, setCartOpen }) => {
    
    const handleModalOpen = () => {
        setCartOpen(true);
    };

    const handleModalClose = () => {
        setCartOpen(false);
    };

    return(
        <Fragment>
            <IconButton className={styles.cartButton} onClick={handleModalOpen}>
                <ShoppingCartOutlinedIcon className={styles.cartIcon}/>
            </IconButton>

            {/*TODO: Develop CartModal*/}
            <InDevelopingModal open={cartOpen} handleClose={handleModalClose}/>
        </Fragment>
    )
}

export default Cart;