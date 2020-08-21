import React from 'react';
import styles from './ProfileMenu.module.sass'

import List from "./list/List";

const ProfileMenu = ({ user }) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div className={styles.root} onMouseOver={handleOpen} onMouseLeave={handleClose}>
            <span className={styles.dropdownBtn}>
                {user.authorized ? `${user.name} ${user.lastname}` : 'Личный кабинет' }
            </span>
            {open
                ?
                <div className={styles.dropdownRoot}>
                    <div className={styles.dropdownContainer}>
                        <List authorized={user.authorized}/>
                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default ProfileMenu;