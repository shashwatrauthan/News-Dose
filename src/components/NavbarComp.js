import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import {Link} from "react-router-dom";


export class NavbarComp extends Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg" className="fixed-top">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/">News Dose</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <NavDropdown title="Categories" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="general">General</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="entertainment">Entertainment</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="business">Business</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="health">Health</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="science">Science</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="sports">Sports</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="technology">Technology</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default NavbarComp