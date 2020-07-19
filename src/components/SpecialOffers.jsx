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
                    console.log(result);
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
                <div className={styles.headingWrapper}>
                    <h1 className={styles.heading}>Лидеры продаж</h1>
                </div>
                <div className={styles.productsList}>
                    {products.slice(0, 8).map((product) =>
                        <Product product={product} key={product.id}/>
                    )}
                </div>
                <div className={styles.showMoreWrapper}>
                    <button className={styles.showMoreButton}>Показать все товары</button>
                </div>
            </div>
        )
    }
}

export default SpecialOffers;