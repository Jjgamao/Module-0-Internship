import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

import contact from '../assets/contact.png';
import logofooter from '../assets/logo-footer.png';
import '../assets/styles/footer.css';

export default function Footer() {
  return (
    <Container className="footer">
        <Row className="contact-us">
            <Col>
                <h1>CONTACT US</h1>
                <p>Got more questions? Feel free to emai us with your queries and concerns</p>
                <p>Address: Cebu, Philippines</p>
                <p>Contact Number: +63 917 327 6230</p>
                <p>Email: info@mytsoftdevsolutions.com</p>
            </Col>
            <Col>
                <Image src={contact} fluid></Image>
            </Col>
        </Row>
        <Image src={logofooter} fluid></Image>
    </Container>
  );
}