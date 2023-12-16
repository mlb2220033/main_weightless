import React from 'react';
import '../App.css';
import '../styles/Video.css';

import video2 from '../assets/images/video2.mp4';


function Video() {
  return (
    <div className='hero-container'>
      <video src={video2} autoPlay loop muted/>
      <h1>WEIGHTLESS</h1>
      <p>LIFT YOUR BODY, LIFT YOUR SPIRIT</p>
    </div>

  );
}

export default Video;