import React, { Component } from 'react';
import styles from "../sass/Header.sass"
import { withStyles, fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';


const myStyles = {
    grow: {
        flexGrow: 1,
    },
    // menuButton: {
    //     marginRight: theme.spacing(2),
    // },
    root: {
        paddingTop: '8px',
        paddingBottom: '16px'
    },
    test: {
        color: 'red'
    }
}


@withStyles(myStyles)
class Header extends Component {
    componentWillMount() {

    }

    render() {
        return (
            // <div className={classes.grow}>
                <AppBar position="static" className={this.props.classes.root}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={this.props.classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                    <span className={this.props.classes.test}>some red text</span>
                </AppBar>
            // </div>
        );
    }
}

export default Header;