import React from "react";
import styles from './InDevelopingModal.module.sass'

import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/CloseRounded';
import {Translate} from "react-redux-i18n";

const InDevelopingModal = ({open, handleClose}) => {
    return(
        <Modal
            open={open}
            onClose={handleClose}
        >
            <div className={styles.root}>
                <IconButton className={styles.closeButton} onClick={handleClose}>
                    <CloseIcon className={styles.closeIcon}/>
                </IconButton>

                <p className={styles.text}>
                    <Translate value="modal_plug.message"/>
                </p>

                <button className={styles.accentCloseButton} onClick={handleClose}>
                    <Translate value="modal_plug.close"/>
                </button>
            </div>
        </Modal>
    )
}

export default InDevelopingModal;