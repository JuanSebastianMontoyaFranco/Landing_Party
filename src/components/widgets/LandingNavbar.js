import React, { useState, useEffect } from "react";
import { Nav, Image, Navbar, Container } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import questLogo from '../../assets/img/logos/Logo-Quest.svg';
import { Routes } from "../../routes";
import '../style.css'

const Header = (props) => {

  return (
    <Navbar variant="dark" expand="lg" className="navbar-transparent navbar-theme-primary sticky-top d-none d-md-block">
      <Container className="position-relative justify-content-between px-3">
        <Navbar.Brand to="#home" className="me-lg-3 d-flex align-items-center">
          <Image src={questLogo} />
          
        </Navbar.Brand>

        <div className="d-flex align-items-center">
          <Navbar.Collapse id="navbar-default-primary">
            <Nav className="navbar-nav-hover align-items-lg-center">
              <Link className="mx-3" >Acceder a mi cuenta</Link>
            </Nav>
          </Navbar.Collapse>
        </div> 
      </Container>
    </Navbar>
  );
};

export default Header;
