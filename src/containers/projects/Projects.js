import React, { useContext } from "react";
import "./Projects.scss";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { professionalProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const { isDark } = useContext(StyleContext);
  
  if (!professionalProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="professional-projects">
        <div className="projects-section">
          <h1 className={isDark ? "dark-mode heading projects-heading" : "heading projects-heading"}>
            Professional Projects
          </h1>
          <p className={isDark ? "dark-mode subTitle projects-subtitle" : "subTitle projects-subtitle"}>
            AI/ML Research Projects in Partnership with Industry and Academia
          </p>
          
          <div className="project-cards-div">
            {professionalProjects.data.map((project, index) => (
              <ProjectCard key={index} project={project} isDark={isDark} />
            ))}
          </div>
          
          <div className="projects-footer">
            <p className={isDark ? "dark-mode projects-count" : "projects-count"}>
              Showcasing {professionalProjects.data.length} of 20+ completed enterprise projects (recently).
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
