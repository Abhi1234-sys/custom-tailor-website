import React from "react";
import "../App.css";
import MomPhoto from "../images/mom.jpg";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Information</h1>

      <div className="contact-card card">
        <div className="contact-photo">
          <img src={MomPhoto} alt="Uma Mahato" />
        </div>

        <div className="contact-info-box">
          <p><strong>Name:</strong> Uma Mahato</p>
          <p><strong>Address:</strong> Uttar PratapBagan, Sarani - 8, Bankura</p>
          <p><strong>Mobile:</strong> 9851167574</p>

          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/919851167574"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat Now
            </a>
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:umamahata01011980@gmail.com">
              umamahata01011980@gmail.com
            </a>
          </p>

          <p>
            <strong>Facebook:</strong>{" "}
            <a
              href="https://www.facebook.com/share/186CK1os6R/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Page
            </a>
          </p>

          <p>
            <strong>YouTube:</strong>{" "}
            <a
              href="https://youtube.com/@umascookingandstitching?si=nvpVb1dGI_KV-tve"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Channel
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;