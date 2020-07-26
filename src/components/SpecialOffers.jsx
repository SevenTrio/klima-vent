import React, { useState, useEffect } from 'react';
// import classNames from 'classnames/bind';

import Product from "./Product";

import styles from '../sass/SpecialOffers.module.sass';

const SpecialOffers = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/products.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setProducts(result.products);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        //TODO: Стилизировать ошибку и загрузку
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return(
            <div className={styles.root}>
                <div className={styles.headingRoot}>
                    <h1 className={styles.headingContent}>Лидеры продаж</h1>
                </div>

                <div className={styles.productsList}>
                    {products.slice(0, 8).map((product) =>
                        <Product product={product} key={product.id}/>
                    )}
                </div>

                <div className={styles.showMoreRoot}>
                    <button className={styles.showMoreButton}>Показать все товары</button>
                </div>
            </div>
        )
    }
}

export default SpecialOffers;