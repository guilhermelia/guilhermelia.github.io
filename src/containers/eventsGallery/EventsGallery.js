import React, { useContext } from "react";
import "./EventsGallery.scss";
import EventGallery from "../../components/eventGallery/EventGallery";
import { eventsGallery } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function EventsGallery() {
  const { isDark } = useContext(StyleContext);
  
  if (!eventsGallery.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="events">
        <h1 className="event-header-text">{eventsGallery.title}</h1>
        <p
          className={
            isDark ? "dark-mode event-subtitle" : "subTitle event-subtitle"
          }
        >
          {eventsGallery.subtitle}
        </p>
        <div className="event-main-div">
          <div className="event-text-div">
            {eventsGallery.events.map((event, i) => {
              return (
                <EventGallery
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: event.title,
                    description: event.description,
                    image: event.image,
                    imageAlt: event.imageAlt,
                    footer: event.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
} 