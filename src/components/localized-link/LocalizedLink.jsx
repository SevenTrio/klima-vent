import React from "react";
import {Link} from "react-router-dom"
import {prefixPath} from '../../i18n/i18n.utils'

const LocalizedLink = ({to, locale, children, className, onClick}) => {
    const path = to === "#" ? "#" : prefixPath(to, locale);

    return (
        <Link
            to={path}
            className={className}
            onClick={onClick}
        >
            {children}
        </Link>
    )
}

export default LocalizedLink;