import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircleRounded";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorderRounded";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartRounded";

const CompareIcon = ({...props}) => {
    return(
        <SvgIcon viewBox="0 0 544 448" {...props}>
            <path d="M432 112l-96 176h192zM112 112l-96 176h192zM317.25 64c-4.75 13.5-15.75 24.5-29.25 29.25v322.75h152c4.5 0 8 3.5 8 8v16c0 4.5-3.5 8-8 8h-336c-4.5 0-8-3.5-8-8v-16c0-4.5 3.5-8 8-8h152v-322.75c-13.5-4.75-24.5-15.75-29.25-29.25h-122.75c-4.5 0-8-3.5-8-8v-16c0-4.5 3.5-8 8-8h122.75c6.75-18.75 24.25-32 45.25-32s38.5 13.25 45.25 32h122.75c4.5 0 8 3.5 8 8v16c0 4.5-3.5 8-8 8h-122.75zM272 68c11 0 20-9 20-20s-9-20-20-20-20 9-20 20 9 20 20 20zM544 288c0 51.5-71.25 72-112 72s-112-20.5-112-72v0c0-9.75 87.25-164.25 98-183.75 2.75-5 8.25-8.25 14-8.25s11.25 3.25 14 8.25c10.75 19.5 98 174 98 183.75v0zM224 288c0 51.5-71.25 72-112 72s-112-20.5-112-72v0c0-9.75 87.25-164.25 98-183.75 2.75-5 8.25-8.25 14-8.25s11.25 3.25 14 8.25c10.75 19.5 98 174 98 183.75z" />
        </SvgIcon>
    );
}

export const loginProps = [
    {
        title: 'profile.login',
        icon: ExitToAppIcon,
        url: '/login'
    },
    {
        title: 'profile.register',
        icon: AccountCircleIcon,
        url: '/register'
    }
];

export const userProps = [
    {
        title: 'profile.personal_data',
        icon: AccountCircleIcon,
        url: '#'
    },
    {
        title: 'profile.compare',
        icon: CompareIcon,
        url: '#'
    },
    {
        title: 'profile.wish_list',
        icon: FavoriteBorderIcon,
        url: '#'
    },
    {
        title: 'profile.cart',
        icon: ShoppingCartIcon,
        url: '#'
    },
    {
        title: 'profile.logout',
        url: '#',
        withoutIcon: true,
    }
];