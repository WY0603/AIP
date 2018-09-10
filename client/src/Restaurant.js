import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Button } from 'reactstrap';
import './App.css';
import Header from "./Header";

/*
this component will show list of restaurant
*/
class Restaurant extends Component {
    render() {
      const restaurants = [
      {name: 'R1', address: 'Address1', contactNo: '12345'},
      {name: 'R2', address: 'Address2', contactNo: '23456'}
      ]


    return (
     
      {restaurants.map((restaurant, i) =>{
        return(
          <div key={i}>
      <Media>
      <Media left href="#">
        <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          {restaurant.name}
        </Media>
         {restaurant.address}
         <br/>
         {restaurant.contactNo}
      </Media>
    </Media>
    <Button color="success" >Details</Button>{' '}
    <p>_____________________________________________________________________________________________________________________________</p>
          </div>
          )
      })}

    </div>
    );
  }

      return (

        <div>
          <div>
              <div>
                  <Header/>
              </div>
          </div>

        {restaurants.map((restaurant, i) =>{
          return (
             <div key={i}>

              <h1>{restaurant.name}</h1>
              <p>{restaurant.address}</p>
              <p>{restaurant.contactNo}</p>
              <button to="/Resdetails"> More Details </button>
              <hr />
             </div>
            )
        })}

        </div>
      );
    }
}

export default Restaurant;