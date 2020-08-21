import React, {Fragment, useState} from 'react';
import styles from './MobileMenu.module.sass';

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/MenuRounded';
import SideMenu from "./side-menu/SideMenu";

const MobileMenu = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <Fragment>
            <IconButton className={styles.mobileMenuButton} onClick={handleOpen}>
                <MenuIcon className={styles.mobileMenuIcon}/>
            </IconButton>

            {open && <SideMenu handleClose={handleClose}/>}
        </Fragment>
    )
}

export default MobileMenu;