import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand className="navbar-title" as={Link} to="/">WatGPT</Navbar.Brand>
        </Navbar>
    );
}

export default AppNavbar;
