import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './CustomerNavbar.css'

class CustomerNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">
                        React-Bootstrap
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link eventKey={1} href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/about">
                            About
                        </Nav.Link>
                        <Nav.Link eventKey={3} href="/news">
                            News
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default CustomerNavbar