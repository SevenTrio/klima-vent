import React from 'react';
import styles from './Footer.module.sass';

import Container from "@material-ui/core/Container";
import MobileNavigation from "./navigation/MobileNavigation";
import Social from "./social/Social";

const MobileFooter = () => {
    return(
        <div className={styles.root}>
            <Container>
                <div className={styles.content}>
                    <MobileNavigation/>
                    <Social/>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>Все права защищены ООО «КЛИМА ВЕНТ», 2020</p>
                    <p className={styles.developer}>Дизайн и разработка - <a href="https://github.com/SevenTrio" className={styles.developer__link}>SevenTrio</a></p>
                </div>
            </Container>
        </div>
    )
}

export default MobileFooter;