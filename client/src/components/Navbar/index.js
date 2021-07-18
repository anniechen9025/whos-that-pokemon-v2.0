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

const Navigation = (props) => {
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
                        <NavItem className="fs-4">
                            <NavLink href="/">Main</NavLink>
                        </NavItem>
                        <NavItem className="fs-4">
                            <NavLink href="/menu">Fun!!</NavLink>
                        </NavItem>
                        <NavItem className="fs-4">
                            <NavLink href="/chatbox">Chatroom</NavLink>
                        </NavItem>
                        <NavItem className="fs-4">
                            <NavLink href="/game">Game</NavLink>
                        </NavItem>
                        <NavItem className="fs-4">
                            <NavLink href="/pokedex">Pokedex</NavLink>
                        </NavItem>
                        <UncontrolledDropdown className="fs-4" nav inNavbar>
                            <DropdownToggle nav caret>
                                Setting
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem className="fs-4" href="/signup">
                                    Signup
                                </DropdownItem>
                                <LoginControl />
                                <DropdownItem divider />
                                <DropdownItem className="fs-4" href="/profile">
                                    Profile
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    {/* <NavbarText>Simple Text</NavbarText> */}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
