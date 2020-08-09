import React from 'react';
import styles from './Search.module.sass';

import SearchIcon from '@material-ui/icons/SearchRounded';

const Search = () => {
    return(
        <form action="" className={styles.root}>
            <SearchIcon className={styles.searchIcon}/>
            <input type="text" placeholder={"Я ищу..."} className={styles.searchInput}/>
            <button className={styles.searchButton}>Найти</button>
        </form>
    )}

export default Search;