import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, hashHistory} from 'react-router'
import Login from "./Login";
import Header from "./Header";
import SignUp from "./SignUp";

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Header />, document.getElementById('header'));

ReactDOM.render(<SignUp />, document.getElementById('signUp'));

ReactDOM.render(<Login />, document.getElementById('login'));

/*ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/login" component={Login}/>
    </Router>
);*/

registerServiceWorker();
