import React, {useEffect, useState} from "react";
import styles from "./CatalogDropdown.module.sass";
import classNames from "classnames/bind";

import LocalizedLink from "../../../localized-link/LocalizedLinkContainer";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SecondaryPropsMenu from "./SecondaryPropsMenu";

const PrimaryPropsMenu = ({ items }) => {
    const [activePropsId, setActivePropsId] = useState(null);

    const handleMouseEnter = (id) => {
        setActivePropsId(id);
    };

    const handleMouseLeave = () => {
        setActivePropsId(null);
    };

    useEffect(() => {
        return () => setActivePropsId(null);
    }, [])

    return(
        <div className={classNames(styles.menu, styles.menu_additional)}>
            <ul className={styles.menu__list} onMouseLeave={handleMouseLeave}>
                {
                    items.map((item, index) => {
                        const isActive = item.id === activePropsId;
                        return(
                            <li key={index} className={classNames(styles.menu__listItem, isActive ? styles.menu__listItem_active : null)} onMouseEnter={() => handleMouseEnter(item.id)}>
                                <LocalizedLink to={item.link} className={styles.listItem__link}>
                                    {item.name}
                                    <ArrowForwardIosIcon className={styles.link__icon}/>
                                </LocalizedLink>

                                { isActive ? <SecondaryPropsMenu items={item.items}/> : null }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default PrimaryPropsMenu;