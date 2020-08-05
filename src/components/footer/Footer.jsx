import React from 'react';
import styles from '../../sass/Footer.module.sass';

import Container from "@material-ui/core/Container";
import Social from "./Social";
import Navigation from "./Navigation";

const Footer = () => {
    return(
        <div className={styles.root}>
            <Container maxWidth="lg">
                <div className={styles.content}>
                    <Social/>
                    <Navigation/>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>Все права защищены ООО «КЛИМА ВЕНТ», 2020</p>
                    <p className={styles.developer}>Дизайн и разработка - <a href="https://github.com/SevenTrio" className={styles.developer__link}>SevenTrio</a></p>
                </div>
            </Container>
        </div>
    )
}

export default Footer;