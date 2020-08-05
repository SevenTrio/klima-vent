import React from 'react';
import styles from '../../sass/Footer.module.sass';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';

const socialData = [
    {
        name: 'facebook',
        url: 'https://facebook.com/',
        icon: <FacebookIcon className={styles.socialListItem__icon}/>
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/',
        icon: <InstagramIcon className={styles.socialListItem__icon}/>
    },
    {
        name: 'twitter',
        url: 'https://twitter.com/',
        icon: <TwitterIcon className={styles.socialListItem__icon}/>
    },
    {
        name: 'telegram',
        url: 'https://web.telegram.org/',
        icon: <TelegramIcon className={styles.socialListItem__icon}/>
    }
]

const Social = () => {
    return(
        <div className={styles.social}>
            <p className={styles.social__title}>Наши соцсети</p>
            <ul className={styles.socialList}>
                {
                    socialData.map(socialItem =>
                        <li key={socialItem.name} className={styles.socialListItem}>
                            <a href={socialItem.url} className={styles.socialListItem__link}>
                                <div className={styles.socialListItem__iconWrapper}>
                                    {socialItem.icon}
                                </div>
                            </a>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Social;