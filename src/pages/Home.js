import React from 'react';
import { Image, Button } from 'react-bootstrap';
import ScrollSpy from "react-ui-scrollspy";

import '../assets/styles/home.css';
import banner from '../assets/banner.png';
import Navigation from '../Component/Navigation/Navigation';
import Responsibilities from '../Component/InternshipCards/Responsibilities';
import Perks from '../Component/InternshipCards/Perks';
import Graduates from '../Component/InternshipCards/Graduates';
import Footer from '../Component/Footer';


const Home = () => {
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
          <Button className="apply-btn" href="/apply">Apply Now!</Button>
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