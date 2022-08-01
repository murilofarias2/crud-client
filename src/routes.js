import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import UserRegister from './pages/UserRegister';
import Login from './pages/Login';
import Register from './pages/Register';
import { Link } from 'react-router-dom';
import { AuthProvider, Context } from './Context/AuthContext';

function ProtectedRoute( {isPrivate, ...rest}){
    const { loading, authenticated } = useContext(Context);

    if(loading){
        return <h1>Loading...</h1>;
    }

    console.debug('Rota', authenticated);

    if(isPrivate && !authenticated){
        return <Redirect to='/'/>
    }

    return <Route {...rest}/>
}

function LoginRoute({...rest}){
    const { authenticated } = useContext(Context)

    if(!authenticated){
        return <Route {...rest}/>
    }

    return <Redirect to='/home'/>
}

function RegisterRoute({...rest}) {
    const { authenticated } = useContext(Context)

    if(!authenticated){
        return <Route {...rest}/>
    }

    return <Redirect to='/home'/>
}


export default function Routes(){

    return(
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    <LoginRoute exact path='/' component={Login}/>
                    <RegisterRoute exact path = '/register' component={Register} />
                    <ProtectedRoute isPrivate exact path='/home' component={Home}/>
                    <ProtectedRoute isPrivate exact path= '/userRegister' component={UserRegister}/>
                    <ProtectedRoute isPrivate exact path='/user/:id' component={UserDetails}/>
                    <ProtectedRoute path='*' component={()=>
                        <>
                            <h2>Erro 404: Rota não encontrada</h2>
                            <Link to='/'>Voltar</Link>
                        </>
                        
                        }/>
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    )
}