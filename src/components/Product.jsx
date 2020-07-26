import React from 'react';
// import classNames from 'classnames/bind';

import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import styles from '../sass/Product.module.sass';

const Image = ({ image }) => {
    return(
        <div className={styles.imageWrapper}>
            <img src={image.url} alt={image.alt} className={styles.image}/>
        </div>
    )
}

const RatingRow = ({ rating }) => {
    return(
        <div className={styles.rating}>
            <Rating
                name="customized-empty"
                className={styles.ratingStars}
                defaultValue={rating.value}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
                readOnly
            />
            <span className={styles.votes}>{rating.votes} отзывов</span>
        </div>
    )
}

const Price = ({ price }) => {
    const currentPrice = price.discount === 0 ? price.value : price.value - price.discount;
    const oldPrice = (
        price.discount && price.discount !== 0
        ?
        <div className={styles.oldPrice}>
            <span className={styles.oldPriceText}>
                {
                    price.value
                }
            </span>
        </div>
        :
        null
    );

    return(
        <div className={styles.priceRoot}>
            {oldPrice}
            <div className={styles.price}>
                <span className={styles.priceText}>
                    {currentPrice}
                </span>
            </div>
        </div>
    )
}

const Product = ({ product }) => {
    return(
        <div className={styles.root}>
            <div className={styles.code}>
                Код товара: {product.id}
            </div>

            <Image image={product.image}/>

            <p className={styles.name}>
                {product.name}
            </p>

            <RatingRow rating={product.rating} />

            <div className={styles.bottomRow}>
                <Price price={product.price}/>
                <button className={styles.button}>Купить</button>
            </div>
        </div>
    )
}

export default Product;