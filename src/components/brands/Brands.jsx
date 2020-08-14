import React from 'react';
import styles from './Brands.module.sass';
import useAxiosRequest from "../../helpers/useAxiosRequest";

import LocalizedLink from "../localized-link/LocalizedLinkContainer";

const Brands = () => {
    const [state] = useAxiosRequest(`/api/brands.json`);

    if (state.isFetching) {
        return null;
    }

    if (state.error) {
        return null;
    }

    const brands = state.responseData;
    return(
        <div className={styles.root}>
            {brands.map((brand, index) =>
                <LocalizedLink key={index} to={brand.link} className={styles.item}>
                    <img src={brand.image.url} alt={brand.image.alt} className={styles.logo}/>
                </LocalizedLink>
            )}
        </div>
    )
}

export default Brands;