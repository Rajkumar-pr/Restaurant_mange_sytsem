import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './About.css';

const About = () => {
  return (
    <div className="aboutWrapper">
      <Header />

      {/* Hero Section with Single Background Image */}
      <div className="aboutHeroImage">
        <div className="heroOverlay">
          <h1 className="heroTitle">Welcome to Royal Hotel</h1>
          <p className="heroSubtitle">Where luxury meets comfort</p>
        </div>
      </div>

      {/* About Content Section */}
      <div className="about-container">
        <h2 className="about-subtitle">🏰 Our Story</h2>
        <p className="about-text">
          Established in <strong>2005</strong>, Royal Hotel was built to offer unmatched hospitality...
        </p>

        <h2 className="about-subtitle">💎 Why Choose Us?</h2>
        <ul className="about-list">
          <li>Elegant, fully-furnished rooms and suites</li>
          <li>Prime location near key attractions</li>
          <li>Fine dining with global & local cuisine</li>
          <li>Spa, fitness, and lounge access</li>
          <li>24/7 exceptional guest services</li>
        </ul>

        <h2 className="about-subtitle">🌱 Sustainability</h2>
        <p className="about-text">
          We're committed to eco-friendly practices and community support.
        </p>

        <p className="about-conclusion">
          ✨ Book your stay at <strong>Royal Hotel</strong> and feel the royal difference.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
