import React from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const sidebar = () => {
    return (
        <Container fluid>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#users">Users</Nav.Link>
                    <Nav.Link href="#settings">Settings</Nav.Link>
                    {/* Add more links as needed */}
                </Nav>
                <Nav>
                    <NavDropdown title="User Name" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
            <Row>
                <Col xs={2} md={2} className="bg-light sidebar">
                    <Nav defaultActiveKey="/dashboard" className="flex-column">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="#recruitment">RECRUITMENT INFO</Nav.Link>
                        <Nav.Link href="#personnel">Personnel Data</Nav.Link>
                        <Nav.Link href="#administration">ADMINISTRATION INFO</Nav.Link>
                        <Nav.Link href="#parade">Parade State</Nav.Link>
                        <Nav.Link href="#deployments">Deployments</Nav.Link>
                        <Nav.Link href="#welfare">Welfare</Nav.Link>
                        <Nav.Link href="#recruitment">Recruitment</Nav.Link>
                        <Nav.Link href="#reports">REPORTS</Nav.Link>
                    </Nav>
                </Col>
                <Col xs={10} md={10}>
                    {/* Main Content Area */}
                </Col>
            </Row>
        </Container>
    );
};

export default sidebar;
