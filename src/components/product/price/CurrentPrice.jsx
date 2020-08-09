import React from "react";
import styles from "./Price.module.sass";

const CurrentPrice = ({price, discount}) => {
    const currentPrice = discount === 0 ? price : price- discount;

    return(
        <div className={styles.price}>
                <span className={styles.priceText}>
                    {currentPrice}
                </span>
        </div>
    )
}

export default CurrentPrice;