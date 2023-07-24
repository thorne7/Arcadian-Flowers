import React from 'react';
import '../style/resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <h4>Resume</h4>
      <nav className="proficiencies">
        <ul>
          <li>Proficiency 1</li>
          <li>Proficiency 2</li>
        </ul>
      </nav>
      <a href="/path/to/your/resume.pdf" download>
        Download Resume
      </a>
    </div>
  );
}

export default Resume;