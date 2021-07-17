// import "./style.css";
import React, { useState } from 'react';
import LoginControl from "../LoginControl"
// import Login from '../Loginbtn';
// import Logout from '../Logoutbtn';
import Pikachu from "../Pikachubg";
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

const Nav2 = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <Navbar color="light" light expand="md">
                <div className="container">
                    <div className="row">
                        <NavbarBrand className="col-6 col-sm-6 text-right" href="/">Who's that Pokemon</NavbarBrand> <Pikachu />
                    </div>
                </div>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown className="fs-4" nav inNavbar>
                            <DropdownToggle nav caret>
                                Register
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem className="fs-4" href="/signup">
                                    Signup
                                </DropdownItem>
                                <LoginControl />
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Nav2;
