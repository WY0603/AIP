import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
    } from 'reactstrap';
import {Link} from "react-router";





class Header extends React.Component{

    constructor(props) {
        super(props);



    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img src="./public/img/logo.png"/></NavbarBrand>
                    <NavbarBrand href="/reslist">Restaurant</NavbarBrand>

                        <Nav className="ml-auto" navbar>
                            <NavItem>
                               <input type="text" placeholder="Search Restaurant" className="form-control"/>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                <Link to="/login">Login</Link>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink>
                                <Link to="/signUp">signup</Link>
                                </NavLink>
                            </NavItem>

                        </Nav>

                </Navbar>
                <div>{this.props.children}</div>
            </div>
        );
    }


    }

export default Header;