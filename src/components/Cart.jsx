import React, {Fragment} from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';import styles from "../sass/Cart.module.sass";

const Cart = ({  }) => {
    return(
        <Fragment>
            <ShoppingCartOutlinedIcon className={styles.cartIcon}/>
        </Fragment>
    )}

export default Cart;