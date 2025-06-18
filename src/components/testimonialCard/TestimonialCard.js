import React, { useContext } from "react";
import "./TestimonialCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function TestimonialCard({ testimonial }) {
  const { isDark } = useContext(StyleContext);

  function openLinkedIn() {
    if (testimonial.linkedinUrl) {
      window.open(testimonial.linkedinUrl, "_blank");
    }
  }

  return (
    <div className={isDark ? "testimonial-card-dark" : "testimonial-card"}>
      <div className="testimonial-header">
        <div className="testimonial-avatar">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-image"
          />
        </div>
        <div className="testimonial-info">
          <h3 className="testimonial-name">{testimonial.name}</h3>
          <p className="testimonial-role">{testimonial.role}</p>
          <p className="testimonial-company">{testimonial.company}</p>
          <div className="testimonial-meta">
            <span className="testimonial-relationship">
              {testimonial.relationship}
            </span>
            <span className="testimonial-date">{testimonial.date}</span>
          </div>
        </div>
      </div>

      <div className="testimonial-content">
        <div className="quote-icon">
          <i className="fas fa-quote-left"></i>
        </div>
        <p className="testimonial-text">{testimonial.testimonial}</p>
      </div>

      <div className="testimonial-tags">
        {testimonial.tags.map((tag, index) => (
          <span key={index} className="testimonial-tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="testimonial-footer">
        <button
          className="linkedin-btn"
          onClick={openLinkedIn}
          title="View LinkedIn Profile"
        >
          <i className="fab fa-linkedin"></i>
          <span>LinkedIn</span>
        </button>
      </div>
    </div>
  );
} 