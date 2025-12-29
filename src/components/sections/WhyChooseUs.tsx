import React from 'react';
import { Check } from 'lucide-react';

export const WhyChooseUs = () => {
  const advantages = [
    "Personalized attention and client-focused strategies",
    "Agility and flexibility in adapting to trends",
    "Cost-effective marketing solutions for growing businesses",
    "Hands-on approach with direct involvement in campaigns",
    "Innovative, trend-driven strategies for modern marketing",
    "Transparent communication and continuous optimization"
];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">
              Why Choose <span className="highlight">Iyseis Quality Marketing</span>
            </h2>
            <p className="about-description">
              At Iyseis Quality Marketing, we’re more than just a digital marketing agency—we’re
               a dedicated partner committed to helping brands establish a strong online presence.
                As a <b>newly</b> founded company, we bring fresh ideas, adaptability, and a results-driven
                 approach to every project. Our mission is to connect businesses with their audience through 
                 strategic marketing, creative storytelling, and data-driven insights that drive real growth.
            </p>
            <p className="about-description">
            At Iyseis Quality Marketing, we believe that every brand has a story worth telling, and we’re here
             to help you tell yours in the most compelling way.
            </p>
            
            <div className="advantages-grid">
              {advantages.map((advantage, index) => (
                <div className="advantage-item" key={index}>
                  <Check size={20} className="check-icon" />
                  <p>{advantage}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-box box-1"></div>
            <div className="image-box box-2"></div>
            <div className="image-outline"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
