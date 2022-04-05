import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

import '../../assets/styles/perks.css';
import mentorship from '../../assets/mentorship.png';
import access from '../../assets/access.png';
import allowance from '../../assets/allowance.png';
import meetups from '../../assets/meetups.png';


const Perks = () => {
    return (
        <div>
            <div className="divider-lg"></div>
            <div className="perks-section">
                <p className="title">INTERN PERKS</p>
                <Container className="perks-container">
                    <Card>
                        <div className="card-container">
                            <Card.Img variant="top" src={mentorship} className="perks-card-img" />
                            <Card.Body>
                                <Card.Title>Mentorship</Card.Title>
                            </Card.Body>
                        </div>
                    </Card>
                    <Card>
                        <div className="card-container">
                            <Card.Img variant="top" src={allowance} className="perks-card-img" />
                            <Card.Body>
                                <Card.Title>Internship Allowance</Card.Title>
                            </Card.Body>
                        </div>
                    </Card>
                    <Card>
                        <div className="card-container">
                            <Card.Img variant="top" src={access} className="perks-card-img" />
                            <Card.Body>
                                <Card.Title>Access to our projects and events</Card.Title>
                            </Card.Body>
                        </div>
                    </Card>
                    <Card>
                        <div className="card-container">
                            <Card.Img variant="top" src={meetups} className="perks-card-img" />
                            <Card.Body>
                                <Card.Title>Company lunch and meetups</Card.Title>
                            </Card.Body>
                        </div>
                    </Card>
                </Container>
            </div>
        </div>
    );
}

export default Perks;