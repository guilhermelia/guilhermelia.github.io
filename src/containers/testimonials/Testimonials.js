import React, { useContext } from "react";
import "./Testimonials.scss";
import TestimonialCard from "../../components/testimonialCard/TestimonialCard";
import { testimonials } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Testimonials() {
  const { isDark } = useContext(StyleContext);

  if (!testimonials.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="testimonials">
        <h1 className="testimonials-header-text">{testimonials.title}</h1>
        <p
          className={
            isDark ? "dark-mode testimonials-subtitle" : "subTitle testimonials-subtitle"
          }
        >
          {testimonials.subtitle}
        </p>
        <div className="testimonials-main-div">
          <div className="testimonials-text-div">
            {testimonials.testimonials.map((testimonial, index) => (
              <Fade
                key={index}
                bottom
                duration={1000}
                delay={index * 200}
                distance="20px"
              >
                <TestimonialCard testimonial={testimonial} />
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
} 