import React, {Fragment} from 'react';
// import classNames from 'classnames/bind';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import styles from '../sass/Profile.module.sass'

const Profile = ({ user }) => {
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
                {user.id === null ? 'Личный кабинет' : `${user.name} ${user.lastname}`}
            </span>
            {open
                ?
                <div className={styles.dropdownRoot}>
                    <div className={styles.dropdownContainer}>
                        {user.id === null
                            ?
                            <Fragment>
                                <a href='/' className={styles.dropdownItem}>
                                    Вход
                                    <ArrowForwardIosIcon className={styles.dropdownItem_icon}/>
                                </a>
                                <a href='/' className={styles.dropdownItem}>
                                    Регистрация
                                    <ArrowForwardIosIcon className={styles.dropdownItem_icon}/>
                                </a>
                            </Fragment>
                            :
                            <Fragment>
                                <a href='/' className={styles.dropdownItem}>
                                    Личные данные
                                    <ArrowForwardIosIcon className={styles.dropdownItem_icon}/>
                                </a>
                                <a href='/' className={styles.dropdownItem}>
                                    Список желаний
                                    <ArrowForwardIosIcon className={styles.dropdownItem_icon}/>
                                </a>
                                <a href='/' className={styles.dropdownItem}>
                                    Корзина
                                    <ArrowForwardIosIcon className={styles.dropdownItem_icon}/>
                                </a>
                                <a href='/' className={styles.dropdownItem}>
                                    Мои покупки
                                    <ArrowForwardIosIcon className={styles.dropdownItem_icon}/>
                                </a>
                                <a href='/' className={styles.dropdownItem}>
                                    Выход
                                </a>
                            </Fragment>
                        }
                    </div>
                </div>
                :
                null
            }
        </div>
    )}

export default Profile;