import React from 'react';
import { Card, Button } from 'react-bootstrap';
import project1img from '../assets/image1.JPG';
import project2img from '../assets/image2.png';
import project3img from '../assets/image3.jpeg';
import project4img from '../assets/image4.jpg';
import project5img from '../assets/image5.jpeg';
import '../style/portfolio.css'; // Import the CSS file

const projects = [
  {
    title: 'Late Bloomer',
    imageSrc: project1img,
    link: 'https://github.com/thorne7/LateBloomer',
  },
  {
    title: 'Botanic Butler',
    imageSrc: project2img,
    link: 'https://github.com/thorne7/Botanic-Butler',
  },
  {
    title: 'Digital Cowboy',
    imageSrc: project3img,
    link: 'https://github.com/thorne7/Digital-Cowboy',
  },
  {
    title: 'Time Goes',
    imageSrc: project4img,
    link: 'https://github.com/thorne7/Time-Goes',
  },
  {
    title: 'Ensomhed',
    imageSrc: project5img,
    link: 'https://github.com/thorne7/Ensomhed',
  },
];

const Portfolio = () => {
    return (
      <div className="portfolio">
        <h3>Portfolio</h3>
        <div className="vertLinePortfolio"></div>
        {/* Wrapping card-container inside flex container */}
        <div className="flex-container">
          <div className="card-container">
            {projects.map((project, index) => (
              <Card key={index} className="project-card">
                {/* Wrap the Card.Img with an anchor tag */}
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                  <Card.Img
                    variant="top"
                    src={project.imageSrc}
                    alt={project.title}
                    className="round-image"
                    style={{ width: '200px', height: '200px' }} // Adjust the image size here
                  />
                </a>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <div className="project-links">
                    <Button href={project.githubLink} target="_blank" variant="secondary">
                     To GitHub
                    </Button>
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
