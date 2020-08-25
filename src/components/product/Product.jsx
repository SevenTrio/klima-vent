import React from 'react';
import styles from './Product.module.sass';

import Code from "./code/Code";
import Image from "./image/Image";
import Name from "./name/Name";
import Rating from "./rating/Rating";
import Price from "./price/Price";
import {Translate} from "react-redux-i18n";

const Product = ({ product, setCartOpen }) => {

    const handleBuyButtonClick = () => {
        setCartOpen(true)
    };

    return(
        <div className={styles.root}>
            <Code id={product.id}/>
            <Image image={product.image}/>
            <Name name={product.name}/>
            <Rating rating={product.rating} />

            <div className={styles.bottomRow}>
                <Price price={product.price}/>
                <button className={styles.button} onClick={handleBuyButtonClick}>
                    <Translate value="product.buy"/>
                </button>
            </div>
        </div>
    )
}

export default Product;