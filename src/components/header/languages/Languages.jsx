import React from 'react';
import styles from './Languages.module.sass';
import classNames from 'classnames/bind';

const Languages = ({ setLanguage, languages, currentLang }) => {
    return(
        <div className={styles.languages}>
            {languages.map((lang, index) => (
                <div className={styles.languagesItem} key={`${lang}_${index}`}>
                    <span
                        className={classNames(styles.language, lang === currentLang && styles.currentLanguage)}
                        onClick={() => lang !== currentLang && setLanguage(lang)}
                    >
                        {lang.toUpperCase()}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Languages;