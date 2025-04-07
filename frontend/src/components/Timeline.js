import React from 'react';
import FadeInSection from './FadeInSection';
import { BadgeCheck } from 'lucide-react';


const Timeline = () => {
  const timelineData = [
    {
      title: "Executive Certification in Cloud Computing",
      issuer: "NPTEL",
    },
    {
      title: "MERN STACK Virtual Internship",
      issuer: "WebStack Academy",
    },
    {
      title: "Code Utsava 7.0 Hackathon Participant",
      issuer: "NIT Raipur",
    },
  ];

  return (
    <FadeInSection>
      <section className="timeline-section" id='cert'>
        <h2 className="timeline-title">
          Additional Experience & Certifications
        </h2>
        <div className="timeline-wrapper">
          {timelineData.map((item, idx) => (
            <div className="timeline-entry" key={idx}>
              <div className="timeline-icon">
                <BadgeCheck className="icon" />
              </div>
              <div className="timeline-content">
                <h5 className="timeline-heading">{item.title}</h5>
                <span className="timeline-subtext">— {item.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
};

export default Timeline;
