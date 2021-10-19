import './Header.css';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand >MedPlus Hospital</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="link-style" to="/home">Home</NavLink>
                            <NavLink className="link-style" to="/services">Services</NavLink>
                            <NavLink className="link-style" to="/doctors">Doctors</NavLink>
                            <NavLink className="link-style" to="/contact">Contact US</NavLink>
                            {(user.email) && <span style={{color:"white",padding:"10px"}}>{user.displayName}</span> }
                            {
                                !(user.email) ? <NavLink className="link-style" to="/login">Sign In</NavLink> :
                                    <button className="" onClick={logOut}>Logout</button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;