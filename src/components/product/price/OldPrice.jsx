import React, { Fragment } from "react";
import styles from "./Price.module.sass";

const OldPrice = ({price, discount}) => {
    return(
        <Fragment>
        {
            discount !== 0
            ?
            <div className={styles.oldPrice}>
                <span className={styles.oldPriceText}>
                    {
                        price
                    }
                </span>
            </div>
            :
            null
        }
        </Fragment>
    )
}

export default OldPrice;