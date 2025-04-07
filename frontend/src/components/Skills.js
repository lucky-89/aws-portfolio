import React from 'react';
import FadeInSection from './FadeInSection';

const skills = [
  { title: 'Full Stack Development', level: 87, description: 'MERN Stack' },
  { title: 'UI/UX', level: 82, description: 'Figma, Wireframe' },
  { title: 'ML Algorithms', level: 75, description: 'Regression, Classification, Clustering, SVM, Boosting, Bagging' },
  { title: 'CI/CD & Containers', level: 61, description: 'Docker, GitHub Actions' },
  { title: 'Cloud', level: 58, description: 'AWS, GCP basics' },
];

const Skills = () => {
  return (
    <FadeInSection>
      <section className="skills section-card">
        <h2 className="section-title">My Skills</h2>
        <div className="skill-container">
          {skills.map((skill, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-header">
                <h3>{skill.title}</h3>
                {/* <span className="skill-level">{skill.level}%</span> */}
              </div>
              <div className="progress">
                <div
                  className="bar"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="bar-description">{skill.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
};

export default Skills;
