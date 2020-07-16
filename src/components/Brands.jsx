import React, { Fragment } from 'react';
// import classNames from 'classnames/bind';

import styles from '../sass/Brands.module.sass';

const Brands = () => {
    const brands = [
        {
            ref: "/",
            image: require('../images/cooperandhunter.png'),
            alt: 'Cooper and Hunter',
        },
        {
            ref: "/",
            image: require('../images/midea.svg'),
            alt: 'Midea',
        },
        {
            ref: "/",
            image: require('../images/hisense.png'),
            alt: 'Hisense',
        },
        {
            ref: "/",
            image: require('../images/idea.svg'),
            alt: 'Idea',
        },
        {
            ref: "/",
            image: require('../images/samurai.svg'),
            alt: 'Samurai',
        },
    ];

    return(
        <div className={styles.root}>
            {brands.map((brand, index) =>
                <a key={index} href={brand.ref} className={styles.item}>
                    <img src={brand.image} alt={brand.alt} className={styles.logo}/>
                </a>
            )}
        </div>
    )}

export default Brands;