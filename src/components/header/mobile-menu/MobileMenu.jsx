import React, { Fragment } from 'react';
import styles from './MobileMenu.module.sass';

import IconButton from "@material-ui/core/IconButton";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const MobileMenu = () => {
    return(
        <Fragment>
            <IconButton className={styles.mobileMenuButton}>
                <MenuRoundedIcon className={styles.mobileMenuIcon}/>
            </IconButton>
        </Fragment>
    )
}

export default MobileMenu;