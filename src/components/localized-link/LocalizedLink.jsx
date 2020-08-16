import React from "react";
import {Link} from "react-router-dom"
import {prefixPath} from '../../i18n/i18n.utils'

const LocalizedLink = ({to = "#", locale, children, dispatch, ...props}) => {
    const path = to === "#" ? "#" : prefixPath(to, locale);

    return (
        <Link
            to={path}
            {...props}
        >
            {children}
        </Link>
    )
}

export default LocalizedLink;