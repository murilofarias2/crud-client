import React, { useState, useContext, useEffect} from "react"
import styles from "./styles.module.scss"
import {Context} from '../../Context/AuthContext';
import { Link } from 'react-router-dom'

export default function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { handleRegister, registerError, clearErrorMessages } = useContext(Context);

    useEffect(() => {
        clearErrorMessages();
    },[])

    return(
        <div className={styles.register}>
        <div className={styles.registerBox}>
            <h1>Registro</h1>
            <div className={styles.input} value={username} onChange={(e)=>{setUsername(e.target.value)}}>
                Usuário
                <input type="text"/>
            </div>
            <div className={styles.input} value={password} onChange={(e)=>{setPassword(e.target.value)}}>
                Senha
                <input type="password"/>
                <span>{registerError}</span>
            </div>
            <div className={styles.buttonBox}>
                <Link to={'/'}><button>Cancelar</button></Link>
                <button  onClick={()=>{handleRegister(username,password)}}>Registrar</button>
            </div>
        </div>
    </div>
    )
}