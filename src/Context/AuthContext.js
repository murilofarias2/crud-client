import React, { createContext, useState, useEffect} from 'react';
import useAuth from '../hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }){

    const { handleLogin, handleLogout,handleRegister,clearErrorMessages, authenticated, loginError, registerError } = useAuth();

    return(
        <Context.Provider value={{handleLogin, handleLogout, handleRegister,clearErrorMessages, registerError, authenticated, loginError}}>
            {children}
        </Context.Provider>
    )

}

export {Context, AuthProvider};