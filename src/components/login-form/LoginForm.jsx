import React, {useState} from "react";
import styles from './LoginForm.module.sass'

import { v4 as uuid } from 'uuid';
import { useHistory, useParams } from "react-router-dom";
import { prefixPath} from "../../i18n/i18n.utils";
import {Translate} from "react-redux-i18n";

const LoginForm = ({ setUser }) => {
    const history = useHistory();
    const params = useParams();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginChange = (event) => {
        setLogin(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        setUser({
            id: uuid(),
            name: login,
        });

        if (history.action === "POP") {
            history.push(prefixPath('/', params.locale));
        } else {
            history.goBack();
        }

        event.preventDefault();
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <label className={styles.listItem__label} htmlFor="login">
                        <Translate value="login.login"/>
                    </label>
                    <input className={styles.listItem__input} type="text" id="login" value={login} onChange={handleLoginChange} required/>
                </li>
                <li className={styles.listItem}>
                    <label className={styles.listItem__label} htmlFor="password">
                        <Translate value="login.password"/>
                    </label>
                    <input className={styles.listItem__input} type="password" id="password" autoComplete="current-password" value={password} onChange={handlePasswordChange} required/>
                </li>
                <li className={styles.listItem}>
                    <button className={styles.button} type="submit">
                        <Translate value="login.sign_in"/>
                    </button>
                </li>
            </ul>
        </form>
    )
}

export default LoginForm;