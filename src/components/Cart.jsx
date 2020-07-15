import React, { Fragment } from 'react';
// import classNames from 'classnames/bind';

import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import styles from "../sass/Cart.module.sass";

const Cart = () => {
    return(
        <Fragment>
            <IconButton className={styles.cartButton}>
                <ShoppingCartOutlinedIcon className={styles.cartIcon}/>
            </IconButton>
        </Fragment>
    )}

export default Cart;