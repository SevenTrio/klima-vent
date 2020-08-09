import React from "react";
import styles from './Telephone.module.sass'
import CallIcon from "@material-ui/icons/Call";

const Telephone = () => {
    return(
        <div className={styles.telephone}>
            <CallIcon style={{ fontSize: 15 }}/>
            <a href="tel:+380956492066" className={styles.telephoneLink}>
                (095) 649-20-66
            </a>
        </div>
    )
};

export default Telephone;


