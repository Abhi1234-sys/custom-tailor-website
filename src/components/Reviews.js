import React from "react";
import "../App.css";

const Reviews = () => {
  const reviews = [
    {
      name: "Priya",
      text: "Amazing stitching! Perfect fitting and design ❤️",
    },
    {
      name: "Anjali",
      text: "সুন্দর কাজ! I loved the finishing 😍",
    },
    {
      name: "Riya",
      text: "Fast delivery and beautiful design. Highly recommended!",
    },
  ];

  return (
    <div className="reviews-section">
      <h2 className="reviews-heading">⭐ Customer Reviews</h2>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="card review-card">
            <p className="review-text">"{review.text}"</p>
            <p className="review-name">- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;