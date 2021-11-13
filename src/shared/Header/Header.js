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

             <Container >
                <Navbar.Brand to="/home"><img  className="logo " src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto bg">
                        <Nav.Link as={NavLink} className="text-light  fw-bolder"  to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} className="text-light  fw-bolder" to="/explore">Explore</Nav.Link>
                        <Nav.Link as={NavLink} className="text-light  fw-bolder" to="/contact"> Contact </Nav.Link>
                       
                        {user?.email && <p className="mt-2 ms-4 me-2 text-warning fw-bolder ">{user?.displayName}</p>}
                        {user?.email && <Nav.Link as={NavLink} className="text-light  fw-bolder" to="/dashboard"><Button className="btn-login">Dashboard</Button></Nav.Link>}
                        {
                          user?.email ? <Button className="btn-login" onClick={logOut}>Logout</Button> 
                          : <Nav.Link as={NavLink}  to="/login"><Button className="btn-login">Login</Button></Nav.Link>

                        }
                       
                      
                 </Nav>
            
                </Navbar.Collapse>
             </Container >
            </Navbar>
        </div>
    );
};

export default Header;