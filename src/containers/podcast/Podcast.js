import React, {useContext} from "react";
import "./Podcast.scss";
import {videoSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Videos() {
  const {isDark} = useContext(StyleContext);

  if (!videoSection)
    console.error("videoSection object for Videos section is missing");

  if (!videoSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="videos">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{videoSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {videoSection.subtitle}
          </p>
        </div>
        <div className="podcast-main-div">
          {videoSection.videos.map((video, i) => {
            if (!video.id) {
              console.log(
                `Video ID for ${videoSection.title} is missing`
              );
            }
            return (
              <div key={i} className="video-card">
                <div className="video-wrapper">
                <iframe
                    className="youtube-video"
                    src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1&origin=${window.location.origin}`}
                  frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title={video.title}
                ></iframe>
                </div>
                <div className="video-info">
                  <h3 className={isDark ? "dark-mode video-title" : "video-title"}>
                    {video.title}
                  </h3>
                  <p className={isDark ? "dark-mode video-description" : "video-description"}>
                    {video.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
