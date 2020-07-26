import React from 'react';
// import classNames from 'classnames/bind';

import styles from '../sass/Brands.module.sass';

const Brands = () => {
    const brands = [
        {
            link: "/",
            image: {
                uri: '/images/brands/cooperandhunter.png',
                alt: 'Cooper and Hunter',
            },
        },
        {
            link: "/",
            image: {
                uri: '/images/brands/midea.svg',
                alt: 'Midea',
            },
        },
        {
            link: "/",
            image: {
                uri: '/images/brands/hisense.png',
                alt: 'Hisense',
            },
        },
        {
            link: "/",
            image: {
                uri: '/images/brands/idea.svg',
                alt: 'Idea',
            },
        },
        {
            link: "/",
            image: {
                uri: '/images/brands/samurai.svg',
                alt: 'Samurai',
            },
        },
    ];

    return(
        <div className={styles.root}>
            {brands.map((brand, index) =>
                <a key={index} href={brand.link} className={styles.item}>
                    <img src={brand.image.uri} alt={brand.image.alt} className={styles.logo}/>
                </a>
            )}
        </div>
    )}

export default Brands;