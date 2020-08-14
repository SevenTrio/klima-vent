import React, { useEffect }  from "react";

import NotFound from "../../pages/NotFound";

const LanguageInspector = ({ component: Component, isRedirect, locale, currentLocale, supportedLocales, setLocaleWithFallback }) => {
    useEffect(() => {
        if (locale !== currentLocale) {
            setLocaleWithFallback(locale);
        }
    });

    if (!Object.keys(supportedLocales).includes(locale) && !isRedirect) return <NotFound/>;

    return(
        <Component/>
    )
}

export default LanguageInspector;