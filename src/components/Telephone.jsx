import React from "react";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CallIcon from "@material-ui/icons/Call";


const useStyles = makeStyles((theme) => createStyles({
    telephone: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.primary.contrastText,
        marginRight: 'auto',
    },
    telephoneLink: {
        fontWeight: 600,
        textDecoration: 'none',
        borderBottom: '1px dashed '+theme.palette.primary.contrastText,
        color: theme.palette.primary.contrastText,
        marginLeft: '3px',
        '&:hover': {
            borderBottom: 'none',
            paddingBottom: 1,
        }
    },
}));

const Telephone = () => {
    const classes = useStyles();
    return(
        <div className={classes.telephone}>
            <CallIcon style={{ fontSize: 15 }}/>
            <a href="tel:+380956492066" className={classes.telephoneLink}>
                (095) 649-20-66
            </a>
        </div>
    )
};

export default Telephone;


