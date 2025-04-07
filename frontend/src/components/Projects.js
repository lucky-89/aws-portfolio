import React from 'react';
import FadeInSection from './FadeInSection';
import { FcDeployment } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const projects = [
  {
    title: 'Crowdfunding Platform',
    img: '/images/port1.png',
    desc: 'MERN-based platform for NGOs to run campaigns, collect donations, and generate certificates.',
    deploy:'https://knit-crowdfunding.netlify.app/',
    github:'https://github.com/lucky-89/Crowdfunding'
  },
  {
    title: 'AI-Powered Service Marketplace',
    img: '/images/port2.png',
    desc: 'Local service platform with AI chatbot and facial recognition for provider verification. Currently, We are working on it',
    github:'https://github.com/lucky-89/Local_Service_Marketplace'
  },
  {
    title: 'Face Similarity Prediction',
    img: '/images/port3.png',
    desc: 'Uses TensorFlow.js and a face similarity API to accurately predict the similarity between two facial images.',
    deploy:'https://eloquent-smakager-919dcd.netlify.app/',
    github:'https://github.com/lucky-89/Face-_Similarity'
  },

  {
    title: 'NIRF Rank Predictor',
    img: '/images/port3.png',
    desc: 'machine learning model for college ranking prediction',
    github:'https://github.com/lucky-89/rank_increaser'
  },

  
];

const Projects = () => {


  return (
    <FadeInSection>
    <section className="projects" >
      <h2 className="section-title">My Projects</h2>
      <div className="project-container">
        {projects.map((proj, idx) => (
          <div className="project" key={idx}>
  <img src={proj.img} alt={proj.title} className="project-img" />
  <div className="project-text">
    <h3>{proj.title}</h3>
    <p>{proj.desc}</p>
    <div className="project-links">
      {proj.deploy && (
        <a href={proj.deploy} target="_blank" rel="noopener noreferrer" className="project-icon">
          <FcDeployment />
        </a>
      )}
      {proj.github && (
        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-icon">
          <FaGithub />
        </a>
      )}
    </div>
  </div>
</div>

        ))}
      </div>
    </section>
    </FadeInSection>
  );
};

export default Projects;
