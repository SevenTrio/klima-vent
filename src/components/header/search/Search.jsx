import React from 'react';
import styles from './Search.module.sass';

import SearchIcon from '@material-ui/icons/SearchRounded';
import {Translate, I18n} from "react-redux-i18n";

const Search = () => {
    return(
        <form action='' className={styles.root}>
            <SearchIcon className={styles.searchIcon}/>
            <input type="text" placeholder={I18n.t("search.im_looking_for")} className={styles.searchInput}/>
            <button className={styles.searchButton}>
                <Translate value="search.search"/>
            </button>
        </form>
    )
}

export default Search;