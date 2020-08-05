import React from "react";
import styles from "./NavigationItem.module.sass";

import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Accordion from "@material-ui/core/Accordion";
import ListItem from "./list-item/ListItem";


const MobileNavigationItem = ({ item }) => {
    return(
        <div className={styles.root}>
            <Accordion className={styles.accordion}>
                <AccordionSummary
                    className={styles.accordion__summary}
                    expandIcon={<ExpandMoreIcon />}
                >
                    <p className={styles.title}>{item.title}</p>
                </AccordionSummary>

                <AccordionDetails>
                    <nav>
                        <ul className={styles.list}>
                            {
                                item.list.map((listItem, index) =>
                                    <ListItem key={index} item={listItem}/>
                                )
                            }
                        </ul>
                    </nav>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MobileNavigationItem;