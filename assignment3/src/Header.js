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


class Header extends React.Component{

    constructor(props) {
        super(props);



    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarBrand href="/reslist">Restaurant</NavbarBrand>

                        <Nav className="ml-auto" navbar>
                            <NavItem>
                               <input type="text" placeholder="Search Restaurant" className="form-control"/>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/signup">Sign up</NavLink>
                            </NavItem>

                        </Nav>

                </Navbar>
            </div>
        );
    }


    }

export default Header;