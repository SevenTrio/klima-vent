import React from 'react';
import styles from './LanguageSwitcher.module.sass';
import { supportedLocales } from "../../../i18n/i18n.config";

import LanguageItem from './LanguageItem'

const LanguageSwitcher = () => {
    return(
        <div className={styles.root}>
            {Object.keys(supportedLocales).map(code => (
                <LanguageItem key={code} code={code}/>
            ))}
        </div>
    )
}

export default LanguageSwitcher;