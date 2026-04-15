import React from "react";
import "../App.css"; // make sure this is imported

const Location = () => {
  return (
    <div className="location-section">
      <div className="card location-card">
        <h2 className="location-heading">📍 Visit Us</h2>

        <p className="location-address">
          Umazzz Stitching, Sarani Number 8, Bankura, West Bengal
        </p>

        <div className="map-container">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.9527393415788!2d87.06304850000002!3d23.244806799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7a5f62cd025f3%3A0x88b219f747255ed8!2sSarani%20Number%208%2C%20Bankura%2C%20West%20Bengal%20722101!5e0!3m2!1sen!2sin!4v1776183271256!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;