import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './Home';
import Restaurant from './Restaurant';
import Navbar from './Navbar';





ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(<Restaurant />, document.getElementById('root'));
// ReactDOM.render(<Navbar />, document.getElementById('root'));
registerServiceWorker();
