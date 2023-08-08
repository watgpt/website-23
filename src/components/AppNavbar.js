//Create a navbar component with react bootstrap using react routing

import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">WatGpt</Navbar.Brand>
        </Navbar>
    )
}
export default AppNavbar;
