import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme.css';
import "./Global.css";
import 'animate.css';
import { AppRouter } from './routers/AppRouter';

export const App = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
