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
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Restaurant from "./Restaurant";


const App = () => (
    <Router>
        <div>
            <header>
                <nav>
                    <ul>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to='/restaurant'>Restaurant</NavLink></li>

                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li><NavLink to="/signup">Signup</NavLink></li>


                    </ul>
                </nav>
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
