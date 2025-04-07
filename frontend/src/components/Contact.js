import React, { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import FadeInSection from './FadeInSection';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm('service_6ctvn2y', 'template_xf2xcva', formRef.current, 'I1ZyG6PX_ioH6uiYt')
      .then((result) => {
        console.log(result.text);
        setStatus("Message sent successfully!");
        formRef.current.reset();
      }, (error) => {
        console.error(error.text);
        setStatus("Failed to send message. Try again.");
      });
  };

  return (
    <FadeInSection>
      <section className="contact">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-container">
          <div className="contact-left">
            <img src="https://thumbs.dreamstime.com/z/agreement-consent-vector-icon-179635861.jpg" alt="Contact" className="contact-graphic" />
          </div>

          <div className="contact-right">
            <p><FaEnvelope /> luckymaurya9719@gmail.com</p>
            <p><FaPhone /> +91-9889503129</p>
            <p><FaMapMarkerAlt /> Adalhat, Mirzapur, Uttar Pradesh, India - 231302</p>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/gurudayal-maurya-971999242/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/lucky-89" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>

            <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
  <input type="text" name="from_name" placeholder="Your Name" required />
  <input type="email" name="from_email" placeholder="Your Email" required />
  <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
  <button type="submit" className="btn">Send Message</button>
</form>


            {status && <p className="form-status">{status}</p>}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default Contact;
