import React, {useEffect, Fragment} from "react";
import styles from "./SideMenu.module.sass";

import AppBar from '@material-ui/core/AppBar';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Transition } from 'react-transition-group';
import Portal from "@material-ui/core/Portal";
import BlackoutWithTransition from "../../../blackout-with-transition/BlackoutWithTransition";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import ArrowBackIcon from '@material-ui/icons/ArrowBackRounded';
import IconButton from "@material-ui/core/IconButton";
import Logo from "../../logo/Logo";
import MobileLanguageSwitcher from "./mobile-language-swither/MobileLanguageSwitcher";
import MobileCatalog from "./mobile-catalog/MobileCatalog";
import MobileProfileMenu from "./mobile-profile-menu/MobileProfileMenuContainer"
import MobileCity from "./mobile-city/MobileCityContainer";

const SideMenu = ({handleClose}) => {
    const [inProp, setInProp] = React.useState(true);

    const targetRef = React.createRef();

    const duration = 300;

    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
    };

    const transitionStyles = {
        entering: { opacity: 0, marginLeft: -400 },
        entered:  { opacity: 1, marginLeft: 0 },
        exiting:  { opacity: 0, marginLeft: -400 },
        exited:   { opacity: 1, marginLeft: 0 }
    };

    useEffect(() =>{
        const targetElement = targetRef.current;
        disableBodyScroll(targetElement);

        return () => enableBodyScroll(targetElement);
    })

    const handleCloseWithTransition = () => {
        setInProp(false)
    };

    return (
        <Fragment>
            <Portal>
                <ClickAwayListener onClickAway={handleCloseWithTransition}>
                    <Transition
                        in={inProp}
                        appear={true}
                        timeout={duration}
                        onExited={handleClose}
                    >
                        {state => (
                            <div
                                ref={targetRef}
                                className={styles.root}
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}
                            >
                                <AppBar className={styles.appBar}>
                                    <IconButton className={styles.backButton} onClick={handleCloseWithTransition}>
                                        <ArrowBackIcon className={styles.backButtonIcon}/>
                                    </IconButton>
                                    <Logo classes={{root: styles.logo, image: styles.logo__image, companyName: styles.logo__companyName}}/>
                                    <MobileLanguageSwitcher/>
                                </AppBar>
                                <MobileCatalog/>
                                <MobileProfileMenu/>
                                <MobileCity/>
                            </div>
                        )}
                    </Transition>
                </ClickAwayListener>
            </Portal>

            <BlackoutWithTransition inProp={inProp} duration={duration}/>
        </Fragment>
    )
}

export default SideMenu;