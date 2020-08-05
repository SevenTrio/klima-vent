import React from 'react';
import styles from './Social.module.sass';
import socialData from "../../../data/socialData";

import SocialItem from "./social-item/SocialItem";

const Social = () => {
    return(
        <div className={styles.root}>
            <p className={styles.title}>Наши соцсети</p>
            <ul className={styles.list}>
                {
                    socialData.map((socialItem, index) =>
                        <SocialItem key={index} item={socialItem}/>
                    )
                }
            </ul>
        </div>
    )
}

export default Social;