import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { firebase } from "../firebase/firebase-config";
import { AuthRouter } from '../routers/AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/auth';
import { PublicRoute } from './PublicRouter';
import { PrivateRoute } from './PrivateRouter';
import { Home } from '../meteoro/home';

export const AppRouter = () => {

    const [checking, setChecking] = useState(false);
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true)
                //dispatch(startLoadingNotes(user.uid))
            } else {
                setIsLoggedIn(false)

            }
            setChecking(false)
        })
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return <h1>Please wait...</h1>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRoute
                        exact
                        path="/"
                        component={Home}
                        isAuthenticated={isLoggedIn}
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
