
import React, { Component } from 'react';
import './App.css';
import Header from "./Header";

/*
this component will show detail of restaurant which customer click it in list
*/

class Resdetails extends Component {
  render() {

    return (
      <div>
      <div>
      <Header />
      </div>
      <h1> resname </h1>
      <h2> respic </h2>
      <h2> resaddress </h2>
      <h2> rescontactno</h2>
    
      
      </div>
    );
  }
}

export default Resdetails;