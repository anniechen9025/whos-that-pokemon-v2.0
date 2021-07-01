// import "./style.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Who's that Pokemon</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Main</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/menu">Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/game">Game</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/pokedex">Pokedex</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Setting
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag={Link} to="/login">
                                    Login
                                </DropdownItem>
                                <DropdownItem>
                                    Logout
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag={Link} to="/profile">
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
