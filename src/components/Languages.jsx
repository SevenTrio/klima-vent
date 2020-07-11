import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import classNames from 'classnames/bind';


const useStyles = makeStyles((theme) => createStyles({
    languages: {
        display: 'flex',
    },
    languagesItem: {
        position: 'relative',
        paddingRight: '5px',
        paddingLeft: '5px',
        '&:first-child': {
            paddingLeft: '0',
        },
        '&:last-child': {
            paddingRight: '0',
        },
        '&:not(:first-child)': {
            '&::before' : {
                content: "''",
                position: 'absolute',
                left: 0,
                top: '2px',
                display: 'inline-block',
                height: '9px',
                borderLeft: `1px solid ${theme.palette.grey["A200"]}`,
            },
        }
    },
    language: {
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    currentLanguage: {
        color: theme.palette.grey["A200"],
        cursor: 'inherit',
        '&:hover': {
            textDecoration: 'none',
        }
    }
}));

const Languages = ({setLanguage, languages, currentLang }) => {
    const classes = useStyles();
    return(
        <div className={classes.languages}>
            {languages.map((lang, index) => (
                <div className={classes.languagesItem} key={`${lang}_${index}`}>
                    <span
                        className={classNames(classes.language, lang === currentLang && classes.currentLanguage)}
                        onClick={() => lang !== currentLang && setLanguage(lang)}
                    >
                        {lang.toUpperCase()}
                    </span>
                </div>
            ))}
        </div>
)}

export default Languages;