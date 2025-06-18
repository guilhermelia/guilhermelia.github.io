import React, { useState, useContext } from "react";
import "./ProjectCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function ProjectCard({ project, isDark: isDarkProp }) {
  const [showModal, setShowModal] = useState(false);
  const { isDark: isDarkContext } = useContext(StyleContext);
  
  // Use prop if provided, otherwise use context
  const isDark = isDarkProp !== undefined ? isDarkProp : isDarkContext;

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      {/* Project Card - Achievement Style */}
      <div className={isDark ? "dark-mode project-card" : "project-card"}>
        <div className="project-image-div">
          <img
            src={project.image}
            alt={project.title}
            className="card-image"
          />
          <div className="project-overlay" onClick={openModal}>
            <div className="view-details-btn">
              <i className="fas fa-eye"></i>
              <span>View Details</span>
            </div>
          </div>
        </div>
        
        <div className="project-detail-div">
          <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
            {project.title}
          </h5>
          <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
            {project.summary}
          </p>
          
          <div className="project-stats-compact">
            <div className="stat-badge">
              <span className="stat-value">{project.keyMetric}</span>
            </div>
            <div className="stat-badge">
              <span className="stat-value">{project.duration}</span>
            </div>
          </div>
        </div>
        
        <div className="project-card-footer">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className={isDark ? "dark-mode project-tag" : "project-tag"}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span 
              className={isDark ? "dark-mode project-tag more-tag" : "project-tag more-tag"}
              onClick={openModal}
            >
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Enhanced Modal */}
      {showModal && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div 
            className={`project-modal-enhanced ${isDark ? "project-modal-enhanced-dark" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header-enhanced">
              <div className="modal-title-section">
                <h2 className="modal-title-enhanced">{project.title}</h2>
                <div className="modal-meta-badges">
                  <span className="meta-badge duration">{project.duration}</span>
                </div>
              </div>
              <button className="modal-close-enhanced" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="modal-body-enhanced">
              <div className="modal-left-column">
                <div className="modal-image-enhanced">
                  <img src={project.image} alt={project.title} />
                </div>
                
                <div className="project-description-enhanced">
                  <h4>Project Overview</h4>
                  <p>{project.description}</p>
                </div>
              </div>
              
              <div className="modal-right-column" style={{marginBottom: "40px"}}>
                <div className="metrics-section-enhanced">
                  <h4>Key Results & Impact</h4>
                  <div className="metrics-grid-enhanced">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="metric-card-enhanced">
                        <div className="metric-value-enhanced">{metric.value}</div>
                        <div className="metric-desc-enhanced">{metric.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tech-section-enhanced">
                  <h4>Technologies & Tools</h4>
                  <div className="tech-grid-enhanced">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge-enhanced">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="achievements-section-enhanced">
                  <h4>Key Achievements</h4>
                  <ul className="achievements-list-enhanced">
                    {project.achievements.slice(0, 4).map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 