import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/profile_img.jpg';
import '../styles/home.css';

function Home() {
  return (
    <div id="home">
      <div className="top">
        <img src={profileImage} className="profile-picture" alt="esther headshot" />

        <div className="h1-container">
          <div className="underline" />
          <h1>esther lu</h1>
        </div>
      </div>

      <div className="links">
        <div className="home-link">
          <Link to="/about">about</Link>
        </div>

        {/*<div className="home-link">
          <Link to="/portfolio">portfolio</Link>
        </div>*/}

        <div className="home-link">
          <Link to="/experience">experience</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
