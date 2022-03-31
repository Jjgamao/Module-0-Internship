import React from 'react';
import {Navbar, Nav, Container, Image, Button} from 'react-bootstrap';
import logo from '../../assets/logo.png';
import styled from 'styled-components';

const Rectangle = styled.div`
  height: 30px;
  background: #273755; 
`

export default function Navigation() {
  return (
    <div>
      <Rectangle></Rectangle>
      <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/"><Image src={logo} fluid /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto basic-nav">
                  <Nav.Link href="/apply">Responsibilities</Nav.Link>
                  <Nav.Link href="/apply">Perks</Nav.Link>
                  <Nav.Link href="/apply">Testimonials</Nav.Link>
                  <Nav.Link href="/apply">Highlights</Nav.Link>
                  <Nav.Link href="/apply"><Button>Apply Now!</Button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}