import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Button } from 'reactstrap';
import Header from "./Header";



/*
this component will show list of restaurant
*/
class Restaurant extends Component {
    constructor(props) {
        super(props);
        console.log(localStorage);
        this.state = {
            "restaurants": [],
            "search": '',
        }; 
        // get request to server side to get the list of restaurant 
        fetch('/resListAll',{
            method:'get',
            headers: {"Content-Type":"application/json"},
        })
        .then(response=>response.json())
        .then(responseJson => {
        //update state with the list of restaurant
        this.setState({
            "restaurants": responseJson,
        })

        })
    }

 //this function is used to filter the searched restaurant by the restaurant name 
filterList(){
    // match the input name with the name in the restaurant list 
    let updatedList = this.state.restaurants.filter((restaurant)=>{
      return restaurant.r_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    })
    let restaurants = updatedList.map((restaurant,index,array)=>{
      return(
          
      <div key={index}>
      <Media>
      <Media left href="#">
        <Media object src={restaurant.r_pic}  style={{height:200,width:200}} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          {restaurant.r_name}
        </Media>
         Address: {restaurant.r_address}
         <br/>
         Contact Number: {restaurant.r_number}
      </Media>
    </Media> 
    {/*// when Details button is clicked, pass the restaurant id to the Detail page.*/}
    <Button color="success" style={{marginLeft:400}} href={"/Resdetails/"+restaurant._id}>Details</Button>{' '}
    
    
    <p>_____________________________________________________________</p>
          </div>
          )

    })
    return restaurants
  }


    render() {
      
    return (
     <div>
     <div>
     <Header />
     </div>
      
        <input placeholder="Search by restaurant name" style={{height:45,width:300}} onChange={evt => this.setState({"search":evt.target.value})} value={this.state.search} type="text"/>
        <p>      </p>
        {this.filterList()}
         
     </div>
   )  
 }
}

export default Restaurant
