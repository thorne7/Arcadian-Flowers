import React from 'react';
import avatarImage from '../assets/me.JPG';
import '../style/aboutme.css';

const AboutMe = () => {
  const floweringShrubs = [
    "Forsythia suspensa",
    "Chimonanthus praecox",
    "Camellia japonica",
    "Rhododendron indicum",
    "Daphne odora",
    "Hamamelis mollis",
    "Magnolia grandiflora",
    "Hydrangea macrophylla",
    "Syringa vulgaris",
    "Azalea mollis",
  ];

  const getRandomShrubName = () => {
    return floweringShrubs[Math.floor(Math.random() * floweringShrubs.length)];
  };

  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="vertLineAbout"></div>

      <img src={avatarImage} alt="Avatar" className="avatar" />
      <p>
        Greetings fellow plant lovers! I'm Dr. {getRandomShrubName()}, an avid enthusiast of {getRandomShrubName()} and {getRandomShrubName()}.
        My passion for plants blossomed at an early age when I encountered {getRandomShrubName()} and {getRandomShrubName()}.
        Fascinated by the intricate world of flowering shrubs, I embarked on a journey to uncover the mysteries of {getRandomShrubName()} and {getRandomShrubName()}.
        From exploring dense {getRandomShrubName()} gardens to observing the delicate blooms of {getRandomShrubName()}, my curiosity knows no bounds.
        When I'm not studying the magic of {getRandomShrubName()}, you'll find me nurturing my own collection of {getRandomShrubName()}.
        Join me in this botanical adventure as we delve into the enchanting world of flowering shrubs and nature's wonders!
      </p>
    </div>
  );
}

export default AboutMe;
