import React from 'react';
import {Navbar, Nav, Container, Image, Button, Modal} from 'react-bootstrap';
import logo from '../../assets/logo.png';
import styled from 'styled-components';

const Rectangle = styled.div`
  height: 30px;
  background: #273755; 
`

export default function Navigation() {
  const [show, setShow] = React.useState(false);

  const onClose = () => setShow(false);
  const onClick = () => setShow(true);
  return (
    <div>
      <Rectangle></Rectangle>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
            <Navbar.Brand href="/"><Image src={logo} fluid /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto basic-nav">
                  <Nav.Link href="#responsibilities">Responsibilities</Nav.Link>
                  <Nav.Link href="#perks">Perks</Nav.Link>
                  <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                  <Nav.Link><Button variant="primary" onClick={onClick}>Apply Now!</Button>
                  <Modal size="xx-large" show={show} onHide={onClose} keyboard={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Application</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Please email us your cover letter and resume at module-zero@mytdevcorp.com.
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={onClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={() => window.location = "mailto:module-zero@mytdevcorp.com."}>Confirm</Button>
                    </Modal.Footer>
                  </Modal>
                  </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}