import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3>Portfolio</h3>
      <div className="vertLinePortfolio"></div>
      <nav>
        {/* Add your projects here */}
        <figure className="proj1">
          <a href="https://thorne7.github.io/Horiseon-Challenge/">
            <img src="assets/images/Horiseon.jpeg" alt="Horiseon project" />
            <div className="ElTitle">Horiseon</div>
          </a>
        </figure>
        {/* Add more project figures with links */}
      </nav>
      {/* Add any additional content or styling you want for the Portfolio page */}
    </div>
  );
}

export default Portfolio;