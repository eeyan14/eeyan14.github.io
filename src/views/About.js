import React from 'react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import '../styles/about.css';

function About() {
  document.title = "About | Esther Lu"
  return (
    <div id="about">
      <Logo />
      <div className="h1-container">
        <div className="underline" />
        <h1>about</h1>
      </div>

      <div className="flex-content">
        <div className="about-text">
          <p>I believe technology is a unique conduit for meeting people's needs, and I love exploring the space where people and technology intersect. I have my B.S. and M.S. in computer engineering from the University of Michigan, and I'm currently a software developer at Duo Security.</p>
          {/*<a>view resume</a>*/}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default About;
