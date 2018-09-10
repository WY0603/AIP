import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Button } from 'reactstrap';
import './App.css';
import Header from "./Header";

/*
this component will show list of restaurant
*/
class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "restaurants": [],
        }; 
        fetch('/resListAll',{
            method:'get',
            headers: {"Content-Type":"application/json"},
        })
        .then(response=>response.json())
        .then(responseJson => {
        this.setState({
            "restaurants": responseJson,
        })

        })
    }




    render() {
      


    return (
     <div>
     <div>
     <Header />
     </div>
     

         {this.state.restaurants.map((restaurant, i) =>{
        return(
          <div key={i}>
      <Media>
      <Media left href="#">
        <Media object src={restaurant.r_pic}  style={{height:200,width:200}} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          {restaurant.r_name}
        </Media>
         {restaurant.r_address}
         <br/>
         {restaurant.r_number}
      </Media>
    </Media>
    <Button color="success" style={{marginLeft:400}} href="/Resdetails">Details</Button>{' '}
    <p>_____________________________________________________________</p>
          </div>
          )
      })}


</div>
   )  
 }
}

export default Restaurant