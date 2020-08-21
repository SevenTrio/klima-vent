import React from "react";
import styles from "./BlackoutWithTransition.module.sass";
import classNames from 'classnames/bind'

import {Portal} from "@material-ui/core";
import {Transition} from "react-transition-group";

const BlackoutWithTransition = ({inProp, duration, className}) => {

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    };

    const transitionStyles = {
        entering: { opacity: 0 },
        entered:  { opacity: 0.5 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0.5 },
    };

    return(
        <Portal>
            <Transition
                in={inProp}
                appear={true}
                timeout={duration}
            >
                {state => (
                    <div
                        className={classNames(styles.blackout, className)}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}
                    />
                )}
            </Transition>
        </Portal>
    )
};

export default BlackoutWithTransition;