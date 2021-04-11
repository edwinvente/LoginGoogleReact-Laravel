import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Login } from '../auth/login';
import { Register } from '../auth/register';


export const AuthRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        exact
                        path="/auth/login"
                        component={Login}
                    />

                    <Route
                        exact
                        path="/auth/register"
                        component={Register}
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
