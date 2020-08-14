import React from 'react';
import styles from './AboutCompany.module.sass';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Translate} from "react-redux-i18n";

const AboutCompany = () => {
    return(
        <div className={styles.root}>
            <Accordion className={styles.accordion}>
                <AccordionSummary
                    className={styles.accordion__summary}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <span className={styles.accordion__text}>
                        <h1><Translate value="about_company.sec_1.h"/></h1>
                        <p><Translate value="about_company.sec_1.p.1"/></p>
                    </span>
                </AccordionSummary>
                <AccordionDetails className={styles.accordion__details}>
                    <span className={styles.accordion__text}>
                        <p><Translate value="about_company.sec_1.p.2"/></p>
                        <br/>
                        <p><Translate value="about_company.sec_1.p.3"/></p>
                        <p><Translate value="about_company.sec_1.p.4"/></p>
                        <p><Translate value="about_company.sec_1.p.5"/></p>
                        <p><Translate value="about_company.sec_1.p.6"/></p>
                        <p><Translate value="about_company.sec_1.p.7"/></p>
                        <p><Translate value="about_company.sec_1.p.8"/></p>
                        <p><Translate value="about_company.sec_1.p.9"/></p>
                        <p><Translate value="about_company.sec_1.p.10"/></p>
                        <p><Translate value="about_company.sec_1.p.11"/></p>
                        <p><Translate value="about_company.sec_1.p.12"/></p>
                        <p><Translate value="about_company.sec_1.p.13"/></p>

                        <h3><Translate value="about_company.sec_2.h"/></h3>
                        <p><Translate value="about_company.sec_2.p.1"/></p>
                        <br/>
                        <p><Translate value="about_company.sec_2.p.2"/></p>
                        <p><Translate value="about_company.sec_2.p.3"/></p>
                        <p><Translate value="about_company.sec_2.p.4"/></p>
                        <p><Translate value="about_company.sec_2.p.5"/></p>
                        <br/>
                        <p><Translate value="about_company.sec_2.p.6"/></p>
                        <br/>
                        <p><Translate value="about_company.sec_2.p.7"/></p>
                        <br/>
                        <p><Translate value="about_company.sec_2.p.8"/></p>
                        <br/>
                        <p><Translate value="about_company.sec_2.p.9"/></p>
                        <p><Translate value="about_company.sec_2.p.10"/></p>
                        <p><Translate value="about_company.sec_2.p.11"/></p>
                        <p><Translate value="about_company.sec_2.p.12"/></p>
                        <p><Translate value="about_company.sec_2.p.13"/></p>
                        <p><Translate value="about_company.sec_2.p.14"/></p>
                        <p><Translate value="about_company.sec_2.p.15"/></p>
                    </span>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AboutCompany;