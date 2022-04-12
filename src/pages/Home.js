import React from 'react';
import { Image, Button, Modal } from 'react-bootstrap';
import ScrollSpy from "react-ui-scrollspy";

import '../assets/styles/home.css';
import banner from '../assets/banner.png';
import Navigation from '../Component/Navigation/Navigation';
import Responsibilities from '../Component/InternshipCards/Responsibilities';
import Perks from '../Component/InternshipCards/Perks';
import Graduates from '../Component/InternshipCards/Graduates';
import Footer from '../Component/Footer';


const Home = () => {
  const [show, setShow] = React.useState(false);

  const onClose = () => setShow(false);
  const onClick = () => setShow(true);
  return (
    <div>
      <Navigation/>
      <Image src={banner} className="banner-bg" />
      <div className="container">
        <h1 className="section-title">Home</h1>
        <hr />
      </div>
      <div className="introduction">
        <div>
          <p>
            Module 0 is MYT Softdev Solutions' internship program that equips interns with the right skills that will set you for the industry. Yes, you heard that right! We will be teaching you technical and soft skills you will need in creating innovative, intuitive and powerful solutions.
          </p>
          <Button className="apply-btn" variant="primary" onClick={onClick}>Apply Now!</Button>
          <Modal show={show} onHide={onClose} keyboard={false}>
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
        </div>
      </div>
      <ScrollSpy>
        <div id="responsibilities">
          <Responsibilities/>
        </div>
        <div id="perks">
          <Perks/>
        </div>
        <div id="testimonials">
          <Graduates/>
        </div>
        <div className="footer-container">
          <Footer/>
        </div>
      </ScrollSpy>
    </div>
    
  );
}

export default Home;