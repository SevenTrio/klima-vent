import React from 'react';
import styles from './ProfileMenu.module.sass'

import List from "./list/List";

const ProfileMenu = ({ user, authorized, setCartOpen, setCompareOpen, setWishlistOpen, removeUser }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const loginProps = [
        {
            title: 'profile.login',
            type: 'link',
            url: '/login',
            onClick: handleClose
        },
        {
            title: 'profile.register',
            type: 'link',
            url: '/register',
            onClick: handleClose
        }
    ];

    const userProps = [
        {
            title: 'profile.personal_data',
            type: 'link',
            url: '#',
            onClick: handleClose
        },
        {
            title: 'profile.wish_list',
            type: 'button',
            onClick: () => {
                handleClose();
                setWishlistOpen(true);
            }
        },
        {
            title: 'profile.compare',
            type: 'button',
            onClick: () => {
                handleClose();
                setCompareOpen(true);
            }
        },
        {
            title: 'profile.cart',
            type: 'button',
            onClick: () => {
                handleClose();
                setCartOpen(true);
            }
        },
        {
            title: 'profile.my_purchases',
            type: 'link',
            url: '#',
            onClick: handleClose
        },
        {
            title: 'profile.logout',
            type: 'button',
            onClick: () => {
                handleClose();
                removeUser();
            },
            withoutIcon: true,
        }
    ];

    const listProps = authorized ? userProps : loginProps;

    return(
        <div className={styles.root} onMouseOver={handleOpen} onMouseLeave={handleClose}>
            <span className={styles.dropdownBtn}>
                {authorized ? `${user.name} ${user.lastname}` : 'Личный кабинет' }
            </span>
            {open
                ?
                <div className={styles.dropdownRoot}>
                    <div className={styles.dropdownContainer}>
                        <List listProps={listProps}/>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default ProfileMenu;