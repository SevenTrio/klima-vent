import React from "react";
import styles from "./Price.module.sass";

import OldPrice from "./OldPrice";
import CurrentPrice from "./CurrentPrice";

const Price = ({ price }) => {
    return(
        <div className={styles.priceRoot}>
            <OldPrice price={price.value} discount={price.discount}/>
            <CurrentPrice price={price.value} discount={price.discount}/>
        </div>
    )
}

export default Price;