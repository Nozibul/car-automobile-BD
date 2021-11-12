import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from './../../images/logo.jpg'
import useAuth from '../../component/Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <div>
          <Navbar className="header-bg" collapseOnSelect expand="lg" variant="dark">

             <Container fluid>
                <Navbar.Brand to="/home"><img  className="logo" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto bg">
                        <Nav.Link as={NavLink} className="text-light  fw-bolder"  to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} className="text-light  fw-bolder" to="/explore">Explore</Nav.Link>
                        <Nav.Link as={NavLink} className="text-light  fw-bolder" to="/contact"> Contact </Nav.Link>
                       
                        {user?.email && <p className="mt-2 ms-4 me-2 text-warning fw-bolder ">{user?.displayName}</p>}

                        {
                          user?.email ? <Button className="login-btn" onClick={logOut}>LogOut</Button> 
                          : <Nav.Link as={NavLink} className="text-dark  fw-bolder" to="/login"><Button className="login-btn">Login</Button></Nav.Link>

                        }
                       
                      
                 </Nav>
            
                </Navbar.Collapse>
             </Container >
            </Navbar>
        </div>
    );
};

export default Header;