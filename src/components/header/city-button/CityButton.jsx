import React from "react";
import styles from './CityButton.module.sass'

import { Translate } from 'react-redux-i18n';

const CityButton = ({ currentCity, setCityOpen }) => {
    const handleModalOpen = () => {
        setCityOpen(true);
    };

    return(
        <div className={styles.title}>
            <Translate value="city.title"/>
            <span className={styles.name} onClick={handleModalOpen}>{currentCity.name}</span>
        </div>
    )
};

export default CityButton;
