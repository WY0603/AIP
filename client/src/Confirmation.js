import React, { Component } from 'react';
import Header from "./Header";



export default class Confirmation extends Component {



render(){
   return(
    <div>
    <Header />
    <div>

     <h2>Thank you for your reservation!</h2>
     <p> An email will be sent to your email address.</p>


    </div>
    </div>

   )
   }
}