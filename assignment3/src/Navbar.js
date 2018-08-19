import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
      </header>
        
        <Nav>
          <NavItem>
            <NavLink href="./Home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="./Restaurant">Restaurant</NavLink>
          </NavItem>
         
        </Nav>
        <hr />
        
      </div>
    );
  }
}