import React from 'react';
import Navigation from '../Component/Navigation/Navigation';
import Image from 'react-bootstrap/Image';
import banner from '../assets/banner.png';

export default function Home() {
  return (
    <div>
      <Navigation/>
      <Image src={banner} fluid />
    </div>
  );
}