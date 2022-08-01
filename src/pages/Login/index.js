import React, { useContext, useState, useEffect } from 'react';
import styles from './styles.module.scss';

import {Context} from '../../Context/AuthContext';
import { Link } from 'react-router-dom';

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const { handleLogin, loginError,clearErrorMessages } = useContext(Context);

    useEffect(() => {
        clearErrorMessages();
    },[])

    return(
        <div className={styles.login}>
            <div className={styles.loginBox}>
                <h1>Login</h1>
                <div className={styles.input} value={username} onChange={(e)=>{setUsername(e.target.value)}}>
                    Usuário
                    <input type="text"/>
                </div>
                <div className={styles.input} value={password} onChange={(e)=>{setPassword(e.target.value)}}>
                    Senha
                    <input type="password"/>
                    <span>{loginError}</span>
                    <Link to={'/register'}><p onClick={()=>{}}>Registre-se!</p></Link>
                </div>
                <button onClick={()=>{handleLogin(username,password)}}>Confirmar</button>
            </div>
        </div>
    )
}