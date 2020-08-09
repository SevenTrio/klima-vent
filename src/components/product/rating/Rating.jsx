import React from "react";
import styles from "./Rating.module.sass";

import RatingIndicators from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";

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
            <span className={styles.votes}>{rating.votes} отзывов</span>
        </div>
    )
}

export default Rating;