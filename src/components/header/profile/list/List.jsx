import React from "react";
import styles from "./List.module.sass";

import ListItem from "./ListItem";
import Logout from "./Logout";

const loginProps = [
    {
        label: 'Вход',
        url: '/login'
    },
    {
        label: 'Регистрация',
        url: '/registration'
    }
];

const userProps = [
    {
        label: 'Личные данные',
        url: '/'
    },
    {
        label: 'Список желаний',
        url: '/'
    },
    {
        label: 'Корзина',
        url: '/'
    },
    {
        label: 'Мои покупки',
        url: '/'
    }
];

const List = ({ authorized }) => {
    const listProps = authorized ? userProps : loginProps;

    return(
        <ul className={styles.root}>
            {
                listProps.map((listItem, index) =>
                    <ListItem key={index} item={listItem}/>
                )
            }
            {
                authorized ? <Logout/> : null
            }
        </ul>
    )
}

export default List;