import React from 'react';
import {Container, Row, Col, Image } from 'react-bootstrap';
import '../../assets/styles/responsibilities.css';
import R1 from '../../assets/R1.png';
import R2 from '../../assets/R2.png';
import R3 from '../../assets/R3.png';
import R4 from '../../assets/R4.png';
import R5 from '../../assets/R5.png';
import R6 from '../../assets/R6.png';
import R7 from '../../assets/R7.png';
import R8 from '../../assets/R8.png';
import R9 from '../../assets/R9.png';
import R10 from '../../assets/R10.png';

const Responsibilities = () => {
  return (
    <div>
      <div className="divider"></div>
      <p class="title">RESPONSIBILITIES</p>

      <Container>
        <Row className="tile-row">
          <Col>
            <Container>
              <Row>
                  <Col className="tile-image" style={{backgroundImage: `url(${R1})`}}></Col>
                  <Col className="tile-description">
                    <p>Assisisting on software design and coding.</p>
                  </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
                <Row>
                  <Col className="tile-image" style={{backgroundImage: `url(${R2})`}}>1 of 1</Col>
                  <Col className="tile-description">
                    <p>Learning the codebase and improving your coding skills.</p>
                  </Col>
                </Row>
              </Container>
          </Col>
        </Row>
        <Row className="tile-row">
          <Col>
            <Container>
              <Row>
                  <Col className="tile-image" style={{backgroundImage: `url(${R3})`}}>1 of 1</Col>
                  <Col className="tile-description">
                    <p>Writing and maintaining code.</p>
                  </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
                <Row>
                  <Col className="tile-image" style={{backgroundImage: `url(${R4})`}}>1 of 1</Col>
                  <Col className="tile-description">
                    <p>Working on bug fixes.</p>
                  </Col>
                </Row>
              </Container>
          </Col>
        </Row>
        <Row className="tile-row">
          <Col>
            <Container>
              <Row>
                  <Col className="tile-image" style={{backgroundImage: `url(${R5})`}}></Col>
                  <Col className="tile-description">
                    <p>Responding to requests from the development team.</p>
                  </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
                <Row>
                  <Col className="tile-image" style={{backgroundImage: `url(${R6})`}}>1 of 1</Col>
                  <Col className="tile-description">
                    <p>Monitoring the technical performance of internal systems.</p>
                  </Col>
                </Row>
              </Container>
          </Col>
        </Row>
        <Row className="tile-row">
          <Col>
            <Container>
              <Row>
                  <Col className="tile-image" style={{backgroundImage: `url(${R7})`}}></Col>
                  <Col className="tile-description">
                    <p>Test system and websites for any errors and propose technique to lessen and minimize future re-work within the team.</p>
                  </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
                <Row>
                  <Col className="tile-image" style={{backgroundImage: `url(${R8})`}}>1 of 1</Col>
                  <Col className="tile-description">
                    <p>Assist co-developers in completion of projects to meet the “launch” deadlines.</p>
                  </Col>
                </Row>
              </Container>
          </Col>
        </Row>
        <Row className="tile-row">
          <Col>
            <Container>
              <Row>
                  <Col className="tile-image" style={{backgroundImage: `url(${R9})`}}></Col>
                  <Col className="tile-description">
                    <p>Document technical and functional specification of a project or tasks. Provide documentation of all developments and updates, and ensure all such records are kept up-to-date.</p>
                  </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container>
                <Row>
                  <Col className="tile-image" style={{backgroundImage: `url(${R10})`}}>1 of 1</Col>
                  <Col className="tile-description">
                    <p>Writing reports. </p>
                  </Col>
                </Row>
              </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Responsibilities;
