import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Header from "./Header";

export default class Reservation extends Component {
constructor(props) {
        super(props);

        this.state = {
            "r_id" : this.props.match.params.rid,
            "email": "",
            "time": "10:00",
            "date":"",
            "cusno": "1",
        };

    }
handleSubmit(){
fetch('/reservation',{
            method:'post',
            body: JSON.stringify(this.state),
            headers: {"Content-Type":"application/json"},
        })
        .then(response=>response.json())
        .then(responseJson => {
         
          
            if(responseJson.err_code === 0){
                window.location.href="/Comfirmation";
            }
            else if(responseJson.err_code === 1){
                alert(responseJson.message);
            }

        })
}


render(){
   return(
   	<div>
   	 <Header/>
   	
   	  <div>
      <h1 style={{marginLeft:150}}> Restaurant </h1>
      <Form style={{marginLeft:150}}>
        <FormGroup>
          <Label for="exampleSelect">Number of Customers</Label>
          <Input type="select" name="select" id="exampleSelect" style={{height:20,width:100}}
            onChange={evt => this.setState({"cusno":evt.target.value})}>
             
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Time</Label>
          <Input type="select" name="select" id="exampleSelect" style={{height:20,width:100}}
            onChange={evt => this.setState({"time":evt.target.value})}>
              
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            <option>13:00</option>
            <option>14:00</option>
            <option>15:00</option>
            <option>16:00</option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" style={{height:30,width:200}}
              onChange={evt => this.setState({"date":evt.target.value})}/>  
        </FormGroup>

        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" style={{height:30,width:200}}
           value={this.state.email} onChange={evt => this.setState({"email":evt.target.value})}/>   
          <p style={{color:'red'}}>* Confirmation message will be sent to this email address. </p>
        </FormGroup>

         <Button color="success" onClick={this.handleSubmit.bind(this)}>Reserve</Button>{' '}

        </Form>
       </div>
     </div>
   	)
}

}