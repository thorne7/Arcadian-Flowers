import React from 'react';

const Resume = () => {
  const proficiencies = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "MongoDB",
    "Express.js",
    "RESTful APIs",
    "Git",
    "Responsive Web Design",
  ];

  const getRandomProficiency = () => {
    return proficiencies[Math.floor(Math.random() * proficiencies.length)];
  };

  return (
    <div className="resume">
      <h4>Resume</h4>
      <nav className="proficiencies">
        <ul>
          <li>{getRandomProficiency()}</li>
          <li>{getRandomProficiency()}</li>
          <li>{getRandomProficiency()}</li>
          <li>{getRandomProficiency()}</li>
          <li>{getRandomProficiency()}</li>
          {/* Add more proficiencies or details from your resume */}
        </ul>
      </nav>
      <a href="/path/to/your/resume.pdf" download>
        Download Resume
      </a>
    </div>
  );
}

export default Resume;