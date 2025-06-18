import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  bigProjects,
  blogSection,
  achievementSection,
  professionalProjects,
  eventsGallery,
  testimonials
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewResearchProjects = bigProjects.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewProfessionalProjects = professionalProjects.display;
  const viewEventsGallery = eventsGallery.display;
  const viewTestimonials = testimonials.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          <li>
            <a href="#education">Education</a>
          </li>
          {viewExperience && (
            <li>
              <a href="#experience">Experience</a>
            </li>
          )}
          {viewProfessionalProjects && (
            <li>
              <a href="#professional-projects">Professional Projects</a>
            </li>
          )}
          {viewResearchProjects && (
            <li>
              <a href="#research-projects">Research Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Publications</a>
            </li>
          )}
          {viewEventsGallery && (
            <li>
              <a href="#events">Speaking Events</a>
            </li>
          )}
          {viewTestimonials && (
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          )}
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
