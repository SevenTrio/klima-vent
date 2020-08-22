import React from 'react';
import styles from './Social.module.sass';
import socialData from "./social.data";

import SocialItem from "./social-item/SocialItem";
import {Translate} from "react-redux-i18n";

const Social = () => {
    return(
        <div className={styles.root}>
            <p className={styles.title}>
                <Translate value="footer.social"/>
            </p>
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