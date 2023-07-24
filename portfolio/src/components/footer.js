import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'; // Import icons from react-icons library
import '../components/style/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/thorne7">
          <AiFillGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile">
          <AiFillLinkedin className="icon" />
        </a>
        <a href="https://twitter.com/your-twitter-profile">
          <AiOutlineTwitter className="icon" />
        </a>
      </div>
      <p className="copy-right">&copy; 2023 Darien Hallam. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
