import React from 'react';
import styles from './Social.module.sass';
import footerSocialData from "../../../data/footerSocialData";

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
                    footerSocialData.map((socialItem, index) =>
                        <SocialItem key={index} item={socialItem}/>
                    )
                }
            </ul>
        </div>
    )
}

export default Social;