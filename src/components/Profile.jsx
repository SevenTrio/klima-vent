// import React from 'react';
// import Button from '@material-ui/core/Button';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
// import Divider from '@material-ui/core/Divider';
// import {createStyles, makeStyles} from '@material-ui/core/styles';
//
// import PersonIcon from '@material-ui/icons/Person';
// // import classNames from 'classnames/bind';
//
//
// const useStyles = makeStyles((theme) => createStyles({
//     profile: {
//         display: 'flex',
//         alignItems: 'center',
//         marginLeft: 30,
//         cursor: 'pointer',
//     },
//     profileButton: {
//         fontWeight: 600,
//         borderBottom: '1px dashed '+theme.palette.primary.contrastText,
//         '&:hover': {
//             borderBottom: 'none',
//             paddingBottom: 1,
//         }
//     },
//
//     root: {
//         display: 'flex',
//     },
//     paper: {
//         marginRight: theme.spacing(2),
//     },
// }));
//
// const Profile = ({ user }) => {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);
//     const [anchorEl, setAnchorEl] = React.useState(null);
//
//     const handleToggle = (event) => {
//         setOpen((prevOpen) => !prevOpen);
//         setAnchorEl(event.currentTarget);
//     };
//
//     const handleClose = (event) => {
//         setOpen(false);
//         setAnchorEl(null);
//     };
//
//     function handleListKeyDown(event) {
//         if (event.key === 'Tab') {
//             event.preventDefault();
//             setOpen(false);
//         }
//     }
//
//     return(
//         <div className={classes.profile}>
//             <PersonIcon style={{ fontSize: 15 }}/>
//             <span
//                 className={classes.profileButton}
//                 aria-controls={open ? 'menu-list-grow' : undefined}
//                 aria-haspopup="true"
//                 onClick={handleToggle}
//             >
//                 {user.id === null ? 'Личный кабинет' : `${user.name} ${user.lastname}`}
//             </span>
//             <Popper open={open} anchorEl={anchorEl} role={undefined} transition disablePortal>
//                 {({ TransitionProps, placement }) => (
//                     <Grow
//                         {...TransitionProps}
//                         style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
//                     >
//                         <Paper style={{marginTop: 10}}>
//                             <ClickAwayListener onClickAway={handleClose}>
//                                 {user.id === null
//                                     ?
//                                     <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
//                                         <MenuItem onClick={handleClose}>Войти</MenuItem>
//                                         <MenuItem onClick={handleClose}>Регистрация</MenuItem>
//                                     </MenuList>
//                                     :
//                                     <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
//                                         <MenuItem onClick={handleClose}>Профиль</MenuItem>
//                                         <MenuItem onClick={handleClose}>Корзина</MenuItem>
//                                         <MenuItem onClick={handleClose}>Список желаний</MenuItem>
//                                         <MenuItem onClick={handleClose}>Мои покупки</MenuItem>
//                                         <Divider />
//                                         <MenuItem onClick={handleClose}>Выйти</MenuItem>
//                                     </MenuList>
//                                 }
//                             </ClickAwayListener>
//                         </Paper>
//                     </Grow>
//                 )}
//             </Popper>
//         </div>
//     )}
//
// export default Profile;

import React, {Fragment} from 'react';
import styles from '../sass/Profile.module.sass'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import {createStyles, makeStyles} from '@material-ui/core/styles';
// import classNames from 'classnames/bind';


// const useStyles = makeStyles((theme) => createStyles({
//     profile: {
//
//     },
//     profileButton: {
//
//     },
//     profileContent: {
//
//     },
// }));

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
                                <div className={styles.dropdownItem}>Вход<ArrowForwardIosIcon className={styles.dropdownItem_icon}/></div>
                                <div className={styles.dropdownItem}>Регистрация<ArrowForwardIosIcon className={styles.dropdownItem_icon}/></div>
                            </Fragment>
                            :
                            <Fragment>
                                <a href='/' className={styles.dropdownItem}>Личные данные  <ArrowForwardIosIcon className={styles.dropdownItem_icon}/></a>
                                <a href='/' className={styles.dropdownItem}>Список желаний <ArrowForwardIosIcon className={styles.dropdownItem_icon}/></a>
                                <a href='/' className={styles.dropdownItem}>Корзина        <ArrowForwardIosIcon className={styles.dropdownItem_icon}/></a>
                                <a href='/' className={styles.dropdownItem}>Мои покупки    <ArrowForwardIosIcon className={styles.dropdownItem_icon}/></a>
                                <a href='/' className={styles.dropdownItem}>Выход          </a>
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