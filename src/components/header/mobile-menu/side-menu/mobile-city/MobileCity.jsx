import React from "react";
import styles from "./MobileCity.module.sass";

import {Translate} from "react-redux-i18n";

const MobileCity = ({ handleMenuClose, setCityOpen, currentCity }) => {

    const handleOpen = async () => {
        handleMenuClose();
        await new Promise(r => setTimeout(r, 450)); // костыль чтобы заставить работать Modal из Material UI правильно
        setCityOpen(true);
    }

    return(
        <div className={styles.root}>
            <div className={styles.title}>
                <Translate value="city.title"/>
                <span className={styles.title__cityName} onClick={handleOpen}>{currentCity.name}</span>
            </div>
        </div>
    )
}

export default MobileCity;