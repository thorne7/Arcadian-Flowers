import React from 'react';
import {
  Card,
  Button
} from 'react-bootstrap';
import project1img from '../assets/image1.JPG';
import project2img from '../assets/image2.png';
import project3img from '../assets/image3.jpeg';
import project4img from '../assets/image4.jpg';
import project5img from '../assets/image5.jpeg';
import project6img from '../assets/image6.webp';
import '../style/portfolio.css';

const projects = [{
    title: 'Late Bloomer',
    imageSrc: project1img,
    link: 'https://github.com/thorne7/LateBloomer',
    githubLink: 'https://github.com/thorne7/LateBloomer',
    deployedLink: 'https://github.com/thorne7/LateBloomer',
  },
  {
    title: 'Botanic Butler',
    imageSrc: project2img,
    link: 'https://github.com/thorne7/Botanic-Butler',
    githubLink: 'https://github.com/thorne7/Botanic-Butler',
    deployedLink: 'https://botanic-butler.herokuapp.com/Links to an external site.',
  },
  {
    title: 'Digital Cowboy',
    imageSrc: project3img,
    link: 'https://github.com/thorne7/Digital-Cowboy',
    githubLink: 'https://github.com/thorne7/Digital-Cowboy',
    deployedLink: 'https://thorne7.github.io/Digital-Cowboy/',
  },
  {
    title: 'Time Goes',
    imageSrc: project4img,
    link: 'https://github.com/thorne7/Time-Goes',
    githubLink: 'https://github.com/thorne7/Time-Goes',
    deployedLink: 'https://github.com/thorne7/Time-Goes',
  },
  {
    title: 'Ensomhed',
    imageSrc: project5img,
    link: 'https://github.com/thorne7/Ensomhed',
    githubLink: 'https://github.com/thorne7/Ensomhed',
    deployedLink: 'https://github.com/thorne7/Ensomhed',
  },
  {
    title: 'Jade Fields',
    imageSrc: project6img,
    link: 'https://github.com/thorne7/Jade-Fields',
    githubLink: 'https://github.com/thorne7/Jade-Fields',
    deployedLink: 'https://github.com/thorne7/Jade-Fields',
  }
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3>Portfolio</h3>
      <div className="vertLinePortfolio"></div>
      <div className="flex-container">
        <div className="card-container">
          {projects.map((project, index) => (
            <Card key={index} className="project-card">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                <Card.Img
                  variant="top"
                  src={project.imageSrc}
                  alt={project.title}
                  className="round-image"
                  style={{ width: '200px', height: '200px' }}
                />
              </a>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    To GitHub
                  </a>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Portfolio;