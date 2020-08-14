import React from 'react';
import styles from './SpecialOffers.module.sass';
import useAxiosRequest from "../../helpers/useAxiosRequest";

import Product from "../product/Product";
import {Translate} from "react-redux-i18n";

const SpecialOffers = () => {
    const [state] = useAxiosRequest(`/api/special-offers.json`);

    //TODO: Стилизировать ошибку и загрузку
    if (state.isFetching) {
        return <div>Загрузка...</div>;
    }

    if (state.error) {
        return <div>Ошибка: {state.error.message}</div>;
    }

    const products = state.responseData;
    return(
        <div className={styles.root}>
            <div className={styles.headingRoot}>
                <h1 className={styles.headingContent}>
                    <Translate value="special_offers.sales_leaders"/>
                </h1>
            </div>

            <div className={styles.productsList}>
                {products.slice(0, 8).map((product) =>
                    <Product product={product} key={product.id}/>
                )}
            </div>

            <div className={styles.showMoreRoot}>
                <button className={styles.showMoreButton}>
                    <Translate value="special_offers.show_more"/>
                </button>
            </div>
        </div>
    )
}

export default SpecialOffers;