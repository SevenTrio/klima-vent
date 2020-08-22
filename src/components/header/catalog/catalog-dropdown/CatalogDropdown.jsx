import React, { useState } from "react";
import styles from './CatalogDropdown.module.sass';
import classNames from 'classnames/bind';

import LocalizedLink from "../../../localized-link/LocalizedLinkContainer";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PrimaryPropsMenu from "./PrimaryPropsMenu";
import menuProps from '../catalog.data'

const CatalogDropdown = ({open}) => {
    const [activePropsId, setActivePropsId] = useState(null);

    const handleMouseEnter = (id) => {
        setActivePropsId(id);
    };

    const handleMouseLeave = () => {
        setActivePropsId(null);
    };

    if (!open) return null;

    return(
        <div className={styles.root}>
            <div className={styles.menu}>
                <ul className={styles.menu__list} onMouseLeave={handleMouseLeave}>
                    {
                        menuProps.map((item, index) => {
                            const {icon: Icon = null} = item;
                            const isActive = activePropsId === item.id;
                            return(
                                <li key={index} className={classNames(styles.menu__listItem, isActive ? styles.menu__listItem_active : null)} onMouseEnter={() => handleMouseEnter(item.id)}>
                                    <LocalizedLink to={item.link} className={classNames(styles.listItem__link, styles.listItem__categoriesLink)}>
                                        <Icon className={styles.categoriesLink__icon}/>
                                        {item.category}
                                        <ArrowForwardIosIcon className={styles.link__icon}/>
                                    </LocalizedLink>

                                    { isActive ? <PrimaryPropsMenu items={item.items}/> : null }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default CatalogDropdown;