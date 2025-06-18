import React from "react";
import "./EventGallery.scss";

export default function EventGallery({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div onClick={() => openUrlInNewTab(cardInfo.footer[0].url, cardInfo.title)}>
      <div className={isDark ? "event-container dark-mode" : "event-container"}>
        <a
          className={
            isDark ? "dark-mode event-card event-card-shadow" : "event-card"
          }
          href="#events"
        >
          <div className="event-image-div">
            <img
              src={cardInfo.image}
              alt={cardInfo.imageAlt || "Event Thumbnail"}
              className="event-image"
            ></img>
          </div>
          <h3 className={isDark ? "small-dark event-title" : "event-title"}>
            {cardInfo.title}
          </h3>
          <p className={isDark ? "small-dark small" : "small"}>
            {cardInfo.description}
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
} 