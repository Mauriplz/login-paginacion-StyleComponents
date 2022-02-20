import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    BrowserRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom'
import { login } from '../actions/auth'
import { finishGlobalLoading } from '../actions/ui'
import Spinner from '../components/Spinner'
import LoginPage from '../pages/LoginPage'
import UserPage from '../pages/UserPage'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth)
    const { globalLoading } = useSelector(state => state.ui)

    useEffect(() => {
        const authItem = localStorage.getItem('auth')
        if (authItem) {
            const user = JSON.parse(authItem)
            dispatch(login(user))
        }
        dispatch(finishGlobalLoading())
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
