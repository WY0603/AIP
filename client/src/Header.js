import React from 'react';
import {NavLink} from "react-router-dom";

class Header extends React.Component{

    
    constructor(props){
        super(props);
        console.log(localStorage.username);
        // get the value of username from local storage
        // examine whether username has existed and user has logged in 
        if (localStorage.username != null && localStorage.username.length > 0 ){
            console.log(localStorage.username);
            this.state = {
                // if user has loggin in, set username to State
                "isLoggedin": true,
                "username": localStorage.username

            }
            fetch('/sessionCheck',{
                method:'post',
                body: JSON.stringify(this.state),
                headers: {"Content-Type":"application/json"},
                credentials:'include',
            })

           console.log(this.state.isLoggedin);
        }else{
            this.state = {
                //if user has not logged in, set username to empty
                "isLoggedin": false,
                "username": ""

            }
        }
    }
    //this function is used to empty username and get back to Home page when user has logged out. 
    handleLogout(){
       localStorage.username = "";
       window.location.href="/";
       fetch('/clssession',{
           method:'post',
           body: JSON.stringify(this.state),
           headers: {"Content-Type":"application/json"},
           credentials:'include',
       })
    }  

    render() {
        const isLoggedin = this.state.isLoggedin;
        let button;
        //console.log(isLoggedin);
        // handle the login and logout button switch according the state of isLoggedin. 
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
                        <div className="col-md-2 col-xs" >
                            <NavLink to='/restaurant' style={{color: 'white'}} >Restaurant</NavLink>
                        </div>
                        <div className="col-md" ></div>
                        <div style={{color: 'white'}}>Welcome! {this.state.username}</div>

                         {button}

                        <div className="col-md-1 col-xs btn btn-outline-success ">
                            <NavLink to='/signup' style={{color: 'white'}} >Signup</NavLink>
                        </div>

                    </nav>
                </header>
            </div>
        );
    }

}

export default Header;