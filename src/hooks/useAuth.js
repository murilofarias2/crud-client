import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import api from '../services/api'


export default function useAuth(){

    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        
        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            console.log(api.defaults.headers.Authorization)
            return true;
        }

        return false;
    }

    const [authenticated, setAuthenticated] = useState(isAuthenticated);
    const [loading, setLoading] = useState(true)
    const [loginError, setLoginError] = useState('');
    const [registerError, setRegisterError] = useState('')
    let history = useHistory();


    useEffect(()=>{
        const token = localStorage.getItem('token');
        
        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }
        
        setLoading(false);
    },[]);



    async function handleLogin(username, password){
        if(!username || !password){
            setLoginError('Preencha os campos de usuário e senha')
        } else {
            const { data } = await api.post('/authuser', {username:username, password:password});
        
            if(data.token){
                setAuthenticated(true);
                localStorage.setItem('token', JSON.stringify(data.token));
                localStorage.setItem('username',username);
                api.defaults.headers.Authorization = `Bearer ${data.token}`;
                history.push('/home');
            }else{
                setLoginError('Usuário e/ou senha incorretos')
            }
        }
    }

    function handleLogout(){
        console.log('fazendo logout')
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        history.push('/')
    }

    async function handleRegister(username,password) {
        if(!username || !password){
            setRegisterError('Preencha os campos de usuário e senha')
        } else {
            api.post('/registeruser', {username:username, password:password}).then(()=> {
                history.push('/');
            }).catch(function(err){
                    setRegisterError(`O usuário ${username} já se encotra cadastrado no sistema`)
            });
            
        }
    }

    function clearErrorMessages(){
        setRegisterError('');
        setLoginError('');
    }

    return { handleLogin, handleLogout, handleRegister,clearErrorMessages, registerError, authenticated, loading, loginError }
}