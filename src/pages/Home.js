import React from 'react';
import Navigation from '../Component/Navigation/Navigation';
import Image from 'react-bootstrap/Image';
import banner from '../assets/banner.png';
import Radium, {StyleRoot} from 'radium';
import '../assets/styles/home.css';

const Home = () => {
  return (
    <StyleRoot>
      <Navigation/>
      <Image src={banner} className="banner-bg" />
    </StyleRoot>
  );
}

export default Radium(Home);