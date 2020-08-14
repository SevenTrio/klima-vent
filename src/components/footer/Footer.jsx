import React from 'react';
import styles from './Footer.module.sass';

import Container from "@material-ui/core/Container";
import Social from "./social/Social";
import Navigation from "./navigation/Navigation";
import {Translate} from "react-redux-i18n";

const Footer = () => {
    return(
        <div className={styles.root}>
            <Container maxWidth="lg">
                <div className={styles.content}>
                    <Social/>
                    <Navigation/>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        <Translate value="footer.copyright"/>
                    </p>
                    <p className={styles.developer}>
                        <Translate value="footer.developer"/>
                        <a href="https://github.com/SevenTrio" className={styles.developer__link}>SevenTrio</a>
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Footer;