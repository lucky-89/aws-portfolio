import React from 'react';
import FadeInSection from './FadeInSection';
import { FaDownload } from 'react-icons/fa';
import TypingEffect from './TypingEffect';

const Hero = () => {
  return (
    <FadeInSection>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <img src="https://static.vecteezy.com/system/resources/previews/016/746/979/original/freelancer-software-developer-programmer-coder-illustrator-vector.jpg" alt="Cloud Engineer Illustration" className='hero-img' />
          </div>

          <div className="hero-right">
            <h4>
            <TypingEffect text="Hi there, I'm Gurudayal Maurya" />
            </h4>
            <h1>A <span className="title"><TypingEffect text="MERN STACK DEVELOPER" /></span></h1>
            <p>
              I'm an aspiring fullstack developer passionate about building scalable, secure, and efficient web based solutions.
              I’m expanding my knowledge in cloud computing, focusing on architecting seamless infrastructures and automating deployments for efficient, scalable solutions.
            </p>
            <a href="/cv.pdf" className="btn download-btn" target="_blank" rel="noopener noreferrer">
              Download CV <FaDownload />
            </a>
          </div>
        </div>

        <div className="particles-bg" />
      </section>
    </FadeInSection>
  );
};

export default Hero;
