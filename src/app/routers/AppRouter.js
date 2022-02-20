import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom';
import { login } from '../actions/auth';
import { finishGlobalLoading } from '../actions/ui';

//COMPONENTS
import Spinner from '../components/Spinner';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();

    //Obtener el token de Redux State
    const { token } = useSelector(state => state.auth);

    //Obtener el globalLoading de Redux State(true)
    const { globalLoading } = useSelector(state => state.ui);

    //Cada vez que se carga el componente se comprueba en el localStorage si tenemos la variable auth definida
    useEffect(() => {
        const authItem = localStorage.getItem('auth');

        //Si no es un stirng '' actualizamos el auth state con el token
        if (authItem) {
            const user = JSON.parse(authItem);
            dispatch(login(user));
        }

        //Final del Global Loading
        dispatch(finishGlobalLoading());
    }, [])

    if (globalLoading) {
        return <Spinner />
    }

    return (
        <Router>
            <Switch>
                <PublicRoute exact isAuth={Boolean(token)} path="/login" component={LoginPage} />
                <PrivateRoute exact isAuth={Boolean(token)} path="/users" component={UserPage} />
                <Redirect to="/users" />
            </Switch>
        </Router>
    )
}
