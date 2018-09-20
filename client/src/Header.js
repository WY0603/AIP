import React from 'react';
import {NavLink} from "react-router-dom";

class Header extends React.Component{

    
    constructor(props){
        super(props);
        // this.state = {
        //     "isLoggedin": false,
        //     "username": ""
        // }
        console.log(localStorage.username);
        if (localStorage.username != null && localStorage.username.length > 0 ){
            console.log(localStorage.username);
            this.state = {
                "isLoggedin": true,
                "username": localStorage.username

            }
           console.log(this.state.isLoggedin);
        }else{
            this.state = {
                "isLoggedin": false,
                "username": ""
            
            }
        }
    }
    handleLogout(){
       localStorage.username = "";
       window.location.href="/";
    }  

    render() {
        const isLoggedin = this.state.isLoggedin;
        let button;
        console.log(isLoggedin);
         if (isLoggedin){
                        button = 
                        <div>
                            <button className="btn btn-outline-success" style={{color: 'white'}} onClick = {this.handleLogout.bind(this)}>Logout </button>

                        </div>;
                        }else{
                        button = 
                        <div className="col-md-1 btn btn-outline-success" >
                            <NavLink to='/login' style={{color: 'white'}} >Login</NavLink>
                        </div>;
                       }
                   
        return (
            <div>
                <header style={{height: 90}}>
                    <nav className="navbar navbar-expand-md fixed-top bg-dark">
                        <div className="col-md-2">
                            <NavLink exact to="/" style={{color: 'white'}}  >Home</NavLink>
                        </div>
                        <div className="col-md-2" >
                            <NavLink to='/restaurant' style={{color: 'white'}} >Restaurant</NavLink>
                        </div>
                        <div style={{color: 'white'}}>Welcome! {this.state.username}</div>

                         {button}

                        <div className="col-md-1 btn btn-outline-success ">
                            <NavLink to='/signup' style={{color: 'white'}} >Signup</NavLink>
                        </div>

                    </nav>
                </header>
            </div>
        );
    }

}

export default Header;