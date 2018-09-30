
import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Button } from 'reactstrap';
import Header from "./Header";

/*
this component will show details of the selected restaurant 
*/

class Resdetails extends Component {
  constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            "resDetails": '',
        }; 
        // GET request to server side to get restaurant details with the id parameter passed from Restaurant page.
        fetch('/resDetails/'+this.props.match.params.id,{
            method:'get',
            headers: {"Content-Type":"application/json"},
        })
        .then(response=>response.json())
        .then(responseJson => {
             console.log(responseJson)
             this.setState({
            "resDetails": responseJson[0],
        })

        })
        
    }



  render() {
     
    return (
      <div>
      <div>
      <Header />
      </div>
     <Media>
      <Media left href="#">
        <Media object src={this.state.resDetails.r_pic}  style={{height:300,width:300}} alt="Generic placeholder image"  />
      </Media>
      <Media body>
        <Media heading>
          {this.state.resDetails.r_name}
        </Media>
          Address: {this.state.resDetails.r_address}
          <br/>
          Tel: {this.state.resDetails.r_number}
          <br/>
          Menu: {this.state.resDetails.r_menu}
          
      </Media>
    </Media>
    <br/>
     // pass the restaurant id to the Reservation page.
    <Button color="success" style={{marginLeft:400}} href={"/Reservation/"+this.state.resDetails._id}>Book</Button>{' '}
      
      </div>
    );
  }
}

export default Resdetails;


