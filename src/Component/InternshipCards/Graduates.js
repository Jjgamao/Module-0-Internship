import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import '../../assets/styles/graduates.css';
import mockPhoto from '../../assets/mock-photo.png';

const Graduates = () => {
    return (
        <div>
            <div className="divider-lg"></div>
            <div className="divider-lg-secondary">
                <span></span>
                <span>GRADUATES</span>
            </div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <div className="testimonials-carousel">
                        <Card>
                            <Card.Img variant="top" src={mockPhoto} />
                            <Card.Body>
                                <div className="name">
                                    <Card.Title>Justin Chiu</Card.Title>
                                </div>
                                <Card.Text>
                                    "The Internship was fullfiling. I learned a lot and improve my skills in web development. It was more than I expected."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={mockPhoto} />
                            <Card.Body>
                                <div className="name">
                                    <Card.Title>Justin Chiu</Card.Title>
                                </div>
                                <Card.Text>
                                    "The Internship was fullfiling. I learned a lot and improve my skills in web development. It was more than I expected."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={mockPhoto} />
                            <Card.Body>
                                <div className="name">
                                    <Card.Title>Justin Chiu</Card.Title>
                                </div>
                                <Card.Text>
                                    "The Internship was fullfiling. I learned a lot and improve my skills in web development. It was more than I expected."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="testimonials-carousel">
                        <Card>
                            <Card.Img variant="top" src={mockPhoto} />
                            <Card.Body>
                                <div className="name">
                                    <Card.Title>Justin Chiu</Card.Title>
                                </div>
                                <Card.Text>
                                    "The Internship was fullfiling. I learned a lot and improve my skills in web development. It was more than I expected."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={mockPhoto} />
                            <Card.Body>
                                <div className="name">
                                    <Card.Title>Justin Chiu</Card.Title>
                                </div>
                                <Card.Text>
                                    "The Internship was fullfiling. I learned a lot and improve my skills in web development. It was more than I expected."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={mockPhoto} />
                            <Card.Body>
                                <div className="name">
                                    <Card.Title>Justin Chiu</Card.Title>
                                </div>
                                <Card.Text>
                                    "The Internship was fullfiling. I learned a lot and improve my skills in web development. It was more than I expected."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="testimonials-carousel">
                        <Card>
                            <Card.Img variant="top" src={mockPhoto} />
                            <Card.Body>
                                <div className="name">
                                    <Card.Title>Justin Chiu</Card.Title>
                                </div>
                                <Card.Text>
                                    "The Internship was fullfiling. I learned a lot and improve my skills in web development. It was more than I expected."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={mockPhoto} />
                            <Card.Body>
                                <div className="name">
                                    <Card.Title>Justin Chiu</Card.Title>
                                </div>
                                <Card.Text>
                                    "The Internship was fullfiling. I learned a lot and improve my skills in web development. It was more than I expected."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={mockPhoto} />
                            <Card.Body>
                                <div className="name">
                                    <Card.Title>Justin Chiu</Card.Title>
                                </div>
                                <Card.Text>
                                    "The Internship was fullfiling. I learned a lot and improve my skills in web development. It was more than I expected."
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Graduates;