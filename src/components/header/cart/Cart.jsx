import React, { Fragment } from 'react';
import styles from "./Cart.module.sass";

import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Cart = () => {
    return(
        <Fragment>
            <IconButton className={styles.cartButton}>
                <ShoppingCartOutlinedIcon className={styles.cartIcon}/>
            </IconButton>
        </Fragment>
    )
}

export default Cart;