import React from 'react';
import { Row, Col, Container, Form, Button, Image } from 'react-bootstrap';

import '../assets/styles/apply.css';
import applyBanner from '../assets/apply-banner.png';
import Footer from '../Component/Footer';
import arrowRight from '../assets/arrow-right-circle.png';

const Apply = () => {
  return (
    <div>
        <div className="apply-container">
          <a href="/">
            <Image src={arrowRight} className="back-btn fluid" style={{ position: 'absolute', top: '10px', left: '10px'}}/>
          </a>
          <h2 className="intro">MODULE 0 INTERNSHIP APPLICATION</h2>
          <Container className="form-container">
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-4 frm-group" controlId="formBasicEmail">
                    <Form.Label>NAME</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-4 frm-group" controlId="formBasicEmail">
                    <Form.Label>CONTACT NUMBER</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                </Col>
              </Row>         
              <Row>
                <Col>
                  <Form.Group className="mb-4 frm-group" controlId="formBasicEmail">
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                </Col>
              </Row>  
              <div>
                <label className="upload-label" htmlFor="upload-resume">
                  Upload resume
                </label>
                <input id="upload-resume" style={{visibility:"hidden"}} type={"file"} />
              </div>
              <Button type="submit" className="apply-now-btn">
                APPLY NOW
              </Button>
            </Form>
          </Container>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
    </div>
  );
}

export default Apply;