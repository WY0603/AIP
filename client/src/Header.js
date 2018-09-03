import React from 'react';
import {NavLink} from "react-router-dom";

class Header extends React.Component{


    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md fixed-top bg-dark">
                        <div className="col-md-2">
                            <NavLink exact to="/" style={{color: 'white'}}  >Home</NavLink>
                        </div>
                        <div className="col-md-2" >
                            <NavLink to='/restaurant' style={{color: 'white'}} >Restaurant</NavLink>
                        </div>
                        <div className="col-md"></div>
                        <div>
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                        </div>
                        <div className="col-md-1 btn btn-outline-success">
                            <NavLink to='/login' style={{color: 'white'}} >Login</NavLink>
                        </div>
                        <div className="col-md-1 btn btn-outline-success ">
                            <NavLink to='/signup' style={{color: 'white'}}  >Signup</NavLink>
                        </div>

                    </nav>
                </header>
            </div>
        );
    }

}

export default Header;