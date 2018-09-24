
import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Button } from 'reactstrap';
import Header from "./Header";

/*
this component will show detail of restaurant which customer click it in list
*/

class Resdetails extends Component {
  constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            "resDetails": '',
        }; 
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
          <Button color="success" style={{marginLeft:400}} href={"/Reservation/"+this.state.resDetails._id}>Book</Button>{' '}
      
      </div>
    );
  }
}

export default Resdetails;


