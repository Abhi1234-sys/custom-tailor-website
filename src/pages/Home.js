
import Location from "../components/Location";
import Reviews from "../components/Reviews";
import React, { useState, useEffect } from 'react';
import '../App.css';

// Importing all 5 images
import work1 from '../images/work1.jpg';
import work2 from '../images/work2.jpg';
import work3 from '../images/work3.jpg';
import work4 from '../images/work4.jpg';
import work5 from '../images/work5.jpg';

const Home = () => {
  // Menu State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Rating State
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  
  // Slider State
  const [currentImg, setCurrentImg] = useState(0);
  const images = [work1, work2, work3, work4, work5];

  // Auto-Slide Logic
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(slideTimer);
  }, [images.length]);

  return (
    <div className="home-container">
      
      
      

      {/* Image Slider */}
      <div className="slider-section">
        <div className="image-wrapper">
          <img 
            src={images[currentImg]} 
            alt={`Stitching Work ${currentImg + 1}`} 
            className="main-slider-img" 
          />
        </div>
        <div className="dots-container">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${currentImg === index ? 'active' : ''}`}
              onClick={() => setCurrentImg(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-content">
        <h1 className="brand-title">Umazzz Stitching</h1>
        <p className="brand-subtext">
          Hi, I'm a proud home-based designer who believes every outfit tells a story. 
          I create modern, stylish, and perfectly fitted blouses with love and dedication.
          Your satisfaction and confidence are my biggest rewards.
        </p>
      </div>

      {/* Feedback Section */}
      <div className="feedback-card">
        <h3>Rate Our Work</h3>
        <p>Your feedback helps us grow!</p>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              className={`star-btn ${star <= (hover || rating) ? 'on' : 'off'}`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star-icon">&#9733;</span>
            </button>
          ))}
        </div>
        {rating > 0 && <p className="thank-you">Thank you for rating us {rating} stars!</p>}
      </div>

      {/* ⭐ NEW: Customer Reviews Section */}
      <Reviews />
      <Location />
      

    </div>
  );
};

export default Home;