// HeroSection.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/home.css'; // Assuming you have a CSS file for styling

const HeroSection = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="hero__con">
      <div className="hero__inner__con">
        <h1 className="hero__mainT">
          {title}
        </h1>
        <p className='hero__subT'>{subtitle}</p>
        <a href={buttonLink} className='create_btn'>{buttonText}</a>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

export default HeroSection;
