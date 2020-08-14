import React from "react";
import styles from "./List.module.sass";

import ListItem from "./ListItem";

const loginProps = [
    {
        title: 'profile.login',
        url: '/login'
    },
    {
        title: 'profile.register',
        url: '/register'
    }
];

const userProps = [
    {
        title: 'profile.personal_data',
        url: '#'
    },
    {
        title: 'profile.wish_list',
        url: '#'
    },
    {
        title: 'profile.cart',
        url: '#'
    },
    {
        title: 'profile.my_purchases',
        url: '#'
    },
    {
        title: 'profile.logout',
        url: '#',
        withoutIcon: true
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
        </ul>
    )
}

export default List;