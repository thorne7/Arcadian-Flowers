import React from 'react';

const Contact = () => {
  return (
    <div className="contact-me">
      <h4>Contact Me</h4>
      <nav className="contact">
        <ul>
          <li>Email: your.email@example.com</li>
          <li>
            Github: <a href="https://github.com/your-github-username">Github Profile</a>
          </li>
          {/* Add more contact information or links */}
        </ul>
      </nav>
      {/* Add a contact form with fields for name, email, and message if needed */}
    </div>
  );
}

export default Contact;