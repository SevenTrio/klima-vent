import React from 'react';
import classNames from 'classnames/bind';

import styles from './RippleButton.module.sass';



class RippleButton extends React.Component {
    initializeState = () => {
        return {
            spanStyles: {},
            count: 0,
        }
    }
    state = this.initializeState();

    /* Debounce Code to call the Ripple removing function */
    callCleanUp = (cleanup, delay) => {
        if (this.bounce) {
            clearTimeout(this.bounce);
        }
        this.bounce = setTimeout(() => {
            cleanup();
        }, delay);
    }

    showRipple = (e) => {
        const rippleContainer = e.currentTarget;
        const size = rippleContainer.offsetWidth;
        const pos = rippleContainer.getBoundingClientRect();
        const x = e.pageX - pos.x - (size / 2);
        const y = e.pageY - pos.y - (size / 2);

        const spanStyles = { top: y + 'px', left: x + 'px', height: size + 'px', width: size + 'px' };
        const count = this.state.count + 1;
        this.setState({
            ...this.state,
            spanStyles: {...this.state.spanStyles, [count] : spanStyles},
            count: count
        });
    }

    cleanUp = () => {
        const initialState = this.initializeState();
        this.setState({
            ...this.state,
            spanStyles: initialState.spanStyles,
            count: initialState.count,
        });
    }

    renderRippleSpan = () => {
        const { spanStyles = {}} = this.state;
        const spanArray = Object.keys(spanStyles);
        if (spanArray && spanArray.length > 0) {
            return (
                spanArray.map((key, index) => {
                    return <span key={'spanCount_' + index} className="" style={{ ...spanStyles[key]}}/>;
                })
            )
        } else {
            return null;
        }
    }

    render() {
        const {children = null, classes = "", onClickHandler = null} = this.props;
        return (
            <div ref="targetElement" className={classNames(styles.ripple, classes)} onClick={onClickHandler}>
                {children}
                <div className={styles.rippleContainer} onMouseDown={this.showRipple} onMouseUp={() => this.callCleanUp(this.cleanUp, 1250)}>
                    {this.renderRippleSpan()}
                </div>
            </div>
        );
    }
}

export default RippleButton;