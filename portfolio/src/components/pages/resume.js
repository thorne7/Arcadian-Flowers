import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <h4>Resume</h4>
      <nav className="proficiencies">
        <ul>
          <li>Proficiency 1</li>
          <li>Proficiency 2</li>
          {/* Add more proficiencies or details from your resume */}
        </ul>
      </nav>
      {/* Add a link to download your resume file if available */}
    </div>
  );
}

export default Resume;