import React from 'react';
// import classNames from 'classnames/bind';

import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import styles from '../sass/Product.module.sass';

const Product = ({ product }) => {
    let {id, name, rating, numberOfRatings, oldPrice, currentPrice} = product;

    return(
        <div className={styles.root}>
            <div className={styles.code}>Код товара: {id}</div>
            <div className={styles.imageWrapper}>
                <img src={require(`../images/products/product_${id}.jpg`)} alt={name} className={styles.image}/>
            </div>
            <p className={styles.name}>{name}</p>
            <div className={styles.rating}>
                <Rating
                    name="customized-empty"
                    className={styles.ratingStars}
                    defaultValue={rating}
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    readOnly
                />
                <span className={styles.numberOfRating}>{numberOfRatings} отзывов</span>
            </div>
            <div className={styles.row}>
                <div className={styles.price}>
                    <div className={styles.oldPrice}>
                        <span>{oldPrice}</span>
                    </div>
                    <div className={styles.currentPrice}>
                        <span>{currentPrice}</span>
                    </div>
                </div>
                <button className={styles.button}>Купить</button>
            </div>
        </div>
    )}

export default Product;