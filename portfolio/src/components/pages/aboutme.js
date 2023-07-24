import React from 'react';
import avatarImage from '../assets/me.JPG';
import '../style/aboutme.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="vertLineAbout"></div>

      <img src={avatarImage} alt="Avatar" className="avatar" />
      <p>'About me text'</p>
    </div>
  );
}

export default AboutMe;