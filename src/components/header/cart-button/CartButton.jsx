import React, { Fragment } from 'react';
import styles from "./CartButton.module.sass";

import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const CartButton = ({ setCartOpen }) => {
    return(
        <Fragment>
            <IconButton className={styles.cartButton} onClick={() => setCartOpen(true)}>
                <ShoppingCartOutlinedIcon className={styles.cartIcon}/>
            </IconButton>
        </Fragment>
    )
}

export default CartButton;