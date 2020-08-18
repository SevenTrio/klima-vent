import React, { Fragment } from 'react';
import styles from "./Cart.module.sass";

import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import InDevelopingModal from "../../in-developing-modal/InDevelopingModal";

const Cart = () => {
    const [modalOpen, setModalOpen] = React.useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return(
        <Fragment>
            <IconButton className={styles.cartButton} onClick={handleModalOpen}>
                <ShoppingCartOutlinedIcon className={styles.cartIcon}/>
            </IconButton>

            {/*TODO: Develop CartModal*/}
            <InDevelopingModal open={modalOpen} handleClose={handleModalClose}/>
        </Fragment>
    )
}

export default Cart;