import React from 'react';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
// import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import {createStyles, makeStyles} from '@material-ui/core/styles';
// import classNames from 'classnames/bind';


const useStyles = makeStyles((theme) => createStyles({
    catalogButton: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 30,
        fontSize: '16px',
        lineHeight: '20px',
        height: '40px',
        whiteSpace: 'nowrap',
        color: theme.palette.primary.contrastText,
        padding: 8,
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.grey['400']}`,
        borderRadius: 3,
    },
    catalogButtonIcon: {
        fontSize: 20,
        marginRight: 3,
        color: theme.palette.grey['400'],
    }
}));

const Catalog = ({  }) => {
    const classes = useStyles();
    return(
        <div>
            <button className={classes.catalogButton}>
                <ViewListRoundedIcon className={classes.catalogButtonIcon} /> Каталог товаров
            </button>
        </div>
    )}

export default Catalog;