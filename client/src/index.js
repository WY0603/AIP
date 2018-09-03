import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom'
import Header from "./Header";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Restaurant from "./Restaurant";


const App = () => (
    <Router>
        <div>
            <header>
                <Header />
            </header>    
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/restaurant" component={Restaurant}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>

            </Switch>
        </div>
    </Router>
)



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
