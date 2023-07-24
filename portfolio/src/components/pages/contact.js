import React from 'react';
import '../style/contact.css';
const Contact = () => {
  return (
    <div className="contact">
      <h4>Contact Me</h4>
      <nav className="contact">
        <ul>
          <li>Email: your.email@example.com</li>
          <li>
            Github: <a href="https://github.com/your-github-username">Github Profile</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Contact;