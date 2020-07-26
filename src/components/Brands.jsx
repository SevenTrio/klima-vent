import React from 'react';
// import classNames from 'classnames/bind';

import styles from '../sass/Brands.module.sass';
import useAxiosRequest from "../helpers/useAxiosRequest";

const Brands = () => {
    const [state] = useAxiosRequest(`/api/brands.json`);

    if (state.isFetching) {
        return null;
    }

    if (state.error) {
        return null;
    }

    const brands = state.responseData
    return(
        <div className={styles.root}>
            {brands.map((brand, index) =>
                <a key={index} href={brand.link} className={styles.item}>
                    <img src={brand.image.url} alt={brand.image.alt} className={styles.logo}/>
                </a>
            )}
        </div>
    )}

export default Brands;