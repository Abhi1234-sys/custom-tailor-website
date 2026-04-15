import React from 'react';
import '../App.css';

const highlights = [
  {
    icon: '✂️',
    title: 'Perfect Fit',
    desc: 'Each piece is stitched with attention to detail for a comfortable and elegant fit.',
  },
  {
    icon: '🧵',
    title: 'Made with Love',
    desc: 'Every design is crafted with care, just like making something for family.',
  },
  {
    icon: '🎨',
    title: 'Custom Designs',
    desc: 'From modern styles to traditional looks, every design is made to match your choice.',
  },
  {
    icon: '⭐',
    title: 'Quality Work',
    desc: 'From stitching to finishing touches like latkan and saree fall & picco, everything is done with precision.',
  },
];

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Quote */}
      <p className="about-quote">"Every stitch tells a story of love and elegance."</p>

      {/* Title */}
      <h1 className="about-title">About Us</h1>
      <h3 className="about-subtitle">Crafted with Care, Designed with Love</h3>

      {/* Description */}
      <p className="about-description">
        At <strong>Umazzz Stitching</strong>, every design is more than just stitching — it's a blend
        of creativity, comfort, and personal care. I am a home-based designer passionate about creating
        stylish, perfectly fitted blouses and traditional wear.
      </p>

      {/* Highlights Grid */}
      <div className="highlights-grid">
        {highlights.map((item, i) => (
          <div className="highlight-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="highlight-icon">{item.icon}</div>
            <h4 className="highlight-title">{item.title}</h4>
            <p className="highlight-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;