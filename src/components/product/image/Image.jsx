import React from "react";
import styles from "./Image.module.sass";

const Image = ({ image }) => {
    return(
        <div className={styles.imageWrapper}>
            <img src={image.url} alt={image.alt} className={styles.image}/>
        </div>
    )
}

export default Image;