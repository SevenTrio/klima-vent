import React from "react";
import styles from './MobileProfileMenu.module.sass';

import LocalizedLink from "../../../../localized-link/LocalizedLinkContainer";
import {Translate} from "react-redux-i18n";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircleRounded";
import CompareIcon from "../../../../compare-icon/CompareIcon";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorderRounded";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartRounded";

const MobileProfileMenu = ({ handleMenuClose, authorized, setCartOpen, setCompareOpen, setWishlistOpen, removeUser }) => {
    const loginProps = [
        {
            title: 'profile.login',
            icon: ExitToAppIcon,
            type: 'link',
            url: '/login',
            onClick: handleMenuClose
        },
        {
            title: 'profile.register',
            icon: AccountCircleIcon,
            type: 'link',
            url: '/register',
            onClick: handleMenuClose
        }
    ];

    const userProps = [
        {
            title: 'profile.personal_data',
            icon: AccountCircleIcon,
            type: 'link',
            url: '#',
            onClick: handleMenuClose
        },
        {
            title: 'profile.compare',
            icon: CompareIcon,
            type: 'button',
            onClick: async () => {
                handleMenuClose();
                await new Promise(r => setTimeout(r, 500)); // костыль чтобы заставить работать Modal из Material UI правильно
                setCompareOpen(true);
            }
        },
        {
            title: 'profile.wish_list',
            icon: FavoriteBorderIcon,
            type: 'button',
            onClick: async () => {
                handleMenuClose();
                await new Promise(r => setTimeout(r, 500)); // костыль чтобы заставить работать Modal из Material UI правильно
                setWishlistOpen(true)
            }
        },
        {
            title: 'profile.cart',
            icon: ShoppingCartIcon,
            type: 'button',
            onClick: async () => {
                handleMenuClose();
                await new Promise(r => setTimeout(r, 500)); // костыль чтобы заставить работать Modal из Material UI правильно
                setCartOpen(true);
            }
        },
        {
            title: 'profile.logout',
            type: 'button',
            onClick: () => {
                handleMenuClose();
                removeUser();
            },
            withoutIcon: true,
        }
    ];

    const listProps = authorized ? userProps : loginProps;

    return(
        <div className={styles.root}>
            <nav>
                <ul className={styles.list}>
                    {
                        listProps.map((listItem, index) => {
                            const {icon: Icon} = listItem
                            return(
                                <li key={index} className={styles.listItem}>
                                    {
                                        listItem.type === 'link' ?
                                            <LocalizedLink to={listItem.url} onClick={listItem.onClick} className={styles.listItem__link}>
                                                { listItem.withoutIcon ? null : <Icon className={styles.listItem__icon}/> }
                                                <Translate value={listItem.title}/>
                                            </LocalizedLink>
                                            :
                                            <div onClick={listItem.onClick} className={styles.listItem__link}>
                                                { listItem.withoutIcon ? null : <Icon className={styles.listItem__icon}/> }
                                                <Translate value={listItem.title}/>
                                            </div>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default MobileProfileMenu;