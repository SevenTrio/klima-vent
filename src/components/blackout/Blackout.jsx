import React from "react";
import styles from "./Blackout.module.sass";
import classNames from 'classnames/bind'

import {Portal} from "@material-ui/core";

const Blackout = ({active, className}) => {
    if (!active) return null;

    return(
        <Portal>
            <div className={classNames(styles.blackout, className)}/>
        </Portal>
    )
};

export default Blackout;