import React, { useState } from 'react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import ExperienceItem from '../components/ExperienceItem';
import '../styles/experience.css';

function Experience() {
  document.title = "Experience | Esther Lu"

  const items = [
    {
      category: "job",
      title: "Software Developer, Workit Health",
      subtitle: "Jan 2019 — present",
      description: [
        "Worked across development, design, clinical, and operations teams to create a fully telehealth experience for addiction recovery",
        "Added features to the Electronic Medical Record for staff, including calendar scheduling and improved video/chat experiences",
        "Implemented and improved on member-facing features such as video calling, chat messaging, and account management",
        "Developed for the web in React and Ruby on Rails",
      ]
    },
    {
      category: "event",
      title: "M.S.E. Electrical & Computer Enginering, University of Michigan",
      subtitle: "Dec 2018, Embedded Systems focus"
    },
    {
      category: "job",
      title: "Systems Engineer Intern, Northrop Grumman",
      subtitle: "May 2018 — Aug 2018",
      description: [
        "Supported IRAD team in front-end development for a service platform using Angular, HTML, Bootstrap, etc. with continuous integration",
        "Developed Arduino prototype to demonstrate the capabilities of an efficient data entry solution and suggest potential pitfalls and improvements for the device to the product owner",
        "Followed Agile methodology in planning and development for all technical projects",
        "Assisted in the development and implementation of a system for maintainable and effective internal business practices; created white paper describing best practices for the system",
        "Developed and presented winning solution with a team of interns in a national competition to create an internal website connecting interns looking for work with managers",
      ]
    },
    {
      category: "event",
      title: "B.S.E. Computer Enginering, University of Michigan",
      subtitle: "Dec 2017"
    },
    {
      category: "project",
      title: "Senior Design Project: Metronome",
      subtitle: "Sep 2017 — Dec 2017",
      description: [
        "Designed and built a metronome that would be price-comparable with other top metronomes but would provide more complex functionality",
        "Metronome features included capabilities for polyrhythm generation and arbitrary time signature inputs, as well as Easter eggs such as Corgi and Tetris modes",
        "Incorporated a real-time operating system to provide high timing accuracy, with only ~100 microseconds of jitter",
        "Primarily responsible for user interface and integration of LCD screen and physical user inputs",
      ]
    },
    {
      category: "job",
      title: "Global IT Security Intern, Axalta Coating Systems",
      subtitle: "May 2017 — Aug 2017",
      description: [
        "Restructured Axalta’s Public Key Infrastructure to increase network security",
        "Configured certificate autoenrollment to users and computers to secure company VPN and wireless networks",
        "Developed security protocols for the integration of third-party applications for internal company use",
      ]
    },
    {
      category: "job",
      title: "Research Assistant, Flynn Research Group (University of Michigan)",
      subtitle: "Oct 2015 — Apr 2017",
      description: [
        "Tested compressive sensing/machine learning integrated circuit (IC) in MATLAB, including collecting audio data and implementing SVM machine learning for training and testing",
        "Collected data from iPhone digital to analog converter to measure its signal generating ability as a portable, lower frequency waveform source for IC testing, and presented findings at the Undergraduate Research Opportunities Program Symposium",
      ]
    },
  ]

  return (
    <div id="experience">
      <Logo />
      <div className="h1-container">
        <div className="underline" />
        <h1>experience</h1>
      </div>

      {items.map((item, i) => {
        return (
          <ExperienceItem item={item} key={i} isLast={i === (items.length-1)} />
        )
      })}

      <Footer />
    </div>
  );
}

export default Experience;
