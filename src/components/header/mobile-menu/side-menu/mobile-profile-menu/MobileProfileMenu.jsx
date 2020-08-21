import React from "react";
import styles from './MobileProfileMenu.module.sass';

import { loginProps, userProps } from "../../../../../data/mobileProfileMenuProps";
import LocalizedLink from "../../../../localized-link/LocalizedLinkContainer";
import {Translate} from "react-redux-i18n";

const MobileProfileMenu = ({ user }) => {
    const { authorized } = user;
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
                                    <LocalizedLink to={listItem.url} className={styles.listItem__link}>
                                        { listItem.withoutIcon ? null : <Icon className={styles.listItem__icon}/> }
                                        <Translate value={listItem.title}/>
                                    </LocalizedLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default MobileProfileMenu