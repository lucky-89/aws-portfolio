import React from 'react';
import FadeInSection from './FadeInSection';
const About = () => {
 
  return (
    <FadeInSection>
    <section className="about" >
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
      <div className="details">
  <h3>Academic Details</h3>
  <ul className="academic-list">
    <li>
      <strong>B.Tech (Computer Science and Engineering)</strong> – KNIT Sultanpur (2021–2025)  
      <br />
      <span className="meta">Current CGPA: <strong>8.7</strong></span>
    </li>
    <li>
      <strong>Intermediate (PCM)</strong> – Udai Pratap Inter College, Varanasi (2018–2020)  
      <br />
      <span className="meta">Percentage: <strong>82%</strong></span>
    </li>
    <li>
      <strong>High School</strong> – Adarsh Inter College, Mirzapur (2016–2018)  
      <br />
      <span className="meta">Percentage: <strong>85.67%</strong></span>
    </li>
  </ul>
</div>


        <div className="text">
          <h3>I'm Gurudayal Maurya</h3>
          <p>
            I’m a final year B.Tech student from KNIT Sultanpur. I specialize in Full Stack Web Development, UI/UX Design, and expanding my knowledge in cloud computing and machine learning algorithm.
          </p>
          <a href="/cv.pdf" className="btn" target="_blank" rel="noopener noreferrer">Download CV</a>
        </div>
      </div>
    </section>
    </FadeInSection>
  );
};

export default About;
