import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";

const socialData = [
    {
        name: 'facebook',
        url: 'https://facebook.com/',
        icon: <FacebookIcon style={{fontSize: '24px', color: 'inherit'}}/>
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com/',
        icon: <InstagramIcon style={{fontSize: '24px', color: 'inherit'}}/>
    },
    {
        name: 'twitter',
        url: 'https://twitter.com/',
        icon: <TwitterIcon style={{fontSize: '24px', color: 'inherit'}}/>
    },
    {
        name: 'telegram',
        url: 'https://web.telegram.org/',
        icon: <TelegramIcon style={{fontSize: '24px', color: 'inherit'}}/>
    }
];

export default socialData;