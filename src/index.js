import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Route from './route'
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

// ReactDOM.render(
// <Route>
// <App />
// </Route>
// , document.getElementById('root'));
ReactDOM.render(
    
    <Route />
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();