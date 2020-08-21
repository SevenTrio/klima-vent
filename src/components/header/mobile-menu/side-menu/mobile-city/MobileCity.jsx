import React from "react";
import styles from "./MobileCity.module.sass";

import {Translate} from "react-redux-i18n";

const MobileCity = ({ currentCity }) => {
    return(
        <div className={styles.root}>
            <div className={styles.title}>
                {/*<Translate value="city.title"/> <span className={styles.title__cityName} onClick={handleModalOpen}>{currentCity.name}</span>*/}
                <Translate value="city.title"/> <span className={styles.title__cityName}>{currentCity.name}</span>
            </div>
        </div>
    )
}

export default MobileCity;