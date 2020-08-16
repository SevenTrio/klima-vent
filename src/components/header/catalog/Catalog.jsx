import React, { useState } from 'react';
import styles from './Catalog.module.sass';

import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import RippleButton from "../../ripple-button/RippleButton";
import {Translate} from "react-redux-i18n";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CatalogDropdown from "./catalog-dropdown/CatalogDropdown";
import Blackout from "../../blackout/Blackout";

const Catalog = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <div className={styles.root}>
            <ClickAwayListener onClickAway={handleClickAway}>
                <div>
                    <RippleButton className={styles.catalogButton} onClick={handleClick}>
                        <ViewListRoundedIcon className={styles.catalogButtonIcon}/>
                        <Translate value="catalog.catalog"/>
                    </RippleButton>
                    <CatalogDropdown open={open}/>
                </div>
            </ClickAwayListener>

            <Blackout className={styles.blackout} active={open}/>
        </div>
    );
}

export default Catalog;