import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Container } from 'reactstrap';
import Header from "./Header";

/*

*/
const Home = (props) => {
    return (
      <div>
        <div>
            <div>
                <Header/>
            </div>
        </div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">EasyDining</h1>
            <h2 className="lead">Welcome to EasyDining.</h2>
            <p className="lead">EasyDining is a reliable and reputable website for restaurant reservation. </p>
            <p className="lead"> Enjoy your booking with us! </p>
          </Container>
        </Jumbotron>
      </div>
    );
};

export default Home;