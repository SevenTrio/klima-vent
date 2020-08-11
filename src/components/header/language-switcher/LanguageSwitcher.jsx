import React from 'react';
import styles from './LanguageSwitcher.module.sass';

import LanguageItem from './LanguageItem'

const LanguageSwitcher = ({ locale, supportedLocales,  setLocaleWithFallback }) => {
    const handleLanguageLinkClick = (e, code) => {
        e.preventDefault();
        setLocaleWithFallback(code);
    };

    return(
        <div className={styles.root}>
            {Object.keys(supportedLocales).map(code => (
                <LanguageItem key={code} code={code} active={code === locale} onClick={e => handleLanguageLinkClick(e, code)}/>
            ))}
        </div>
    )
}

export default LanguageSwitcher;