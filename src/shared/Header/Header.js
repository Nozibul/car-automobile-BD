import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css';
import logo from './../../images/logo.jpg'

const Header = () => {
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
                        <Nav.Link as={NavLink} className="text-light  fw-bolder" to="/login"> Login </Nav.Link>

                       
                       {/* {
                          user?.email &&  <div>
                                 <Nav.Link as={NavLink} className="text-dark  fw-bolder" to="/myOrder">My Order </Nav.Link>
                              </div>
                       }
                      <Nav.Link as={NavLink} className="text-dark  fw-bolder" to="/allOrder">Manage All Order </Nav.Link>

                         */}
                    </Nav>
                    {/* <Nav>
                         <p>{user?.displayName}</p>
                        {
                          user?.email ?  <button className="login-btn" onClick={logOut}><Nav.Link as={NavLink} className="text-dark  fw-bolder" to="/login">Sign Out</Nav.Link></button> :
                            <button className="login-btn"><Nav.Link as={NavLink} className="text-dark  fw-bolder" to="/login">Login</Nav.Link></button>

                        }
                        
                    </Nav> */}
                </Navbar.Collapse>
             </Container >
            </Navbar>
        </div>
    );
};

export default Header;