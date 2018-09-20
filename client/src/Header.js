import React from 'react';
import {NavLink} from "react-router-dom";

class Header extends React.Component{

    
    constructor(props){
        super(props);
        this.state = {

            "username": "Welcome! "+localStorage.username.toUpperCase(),
        }
    }


    render() {

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
                        <div style={{color: 'white'}}>{this.state.username}</div>
                        <div className="col-md-1 btn btn-outline-success" >
                            <NavLink to='/login' style={{color: 'white'}} >Login</NavLink>
                        </div>
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