import React from 'react';
import '../styles/portfolio.css';

function PortfolioBox(props) {
  return (
    <a href={props.url} className="portfolio-box">
      {props.children}
    </a>
  );
}

export default PortfolioBox;
