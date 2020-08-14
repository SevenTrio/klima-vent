import React from "react";
import styles from "./Rating.module.sass";

import RatingIndicators from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {Translate} from "react-redux-i18n";

const Rating = ({ rating }) => {
    return(
        <div className={styles.rating}>
            <RatingIndicators
                name="customized-empty"
                className={styles.ratingIndicators}
                defaultValue={rating.value}
                precision={0.5}
                emptyIcon={<StarBorderIcon fontSize="inherit" />}
                readOnly
            />
            <span className={styles.votes}>
                <Translate value="product.votes" votes={rating.votes}/>
            </span>
        </div>
    )
}

export default Rating;