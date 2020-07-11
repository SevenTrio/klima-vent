import React from 'react';
import SearchIcon from '@material-ui/icons/SearchRounded';import InputBase from '@material-ui/core/InputBase';
import styles from '../sass/Search.module.sass';

const Search = () => {
    return(
        <form action="" className={styles.root}>
            <SearchIcon className={styles.searchIcon}/>
            <input type="text" placeholder={"Я ищу..."} className={styles.searchInput}/>
            <button className={styles.searchButton}>Найти</button>
        </form>
    )}

export default Search;