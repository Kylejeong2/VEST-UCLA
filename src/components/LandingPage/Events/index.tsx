"use client";

import Event from "@/components/ui/Event";
import Footer from "@/components/LandingPage/Footer";
import {
  Wrapper,
  Inner,
  ContentContainer,
  EventsHeader,
  EventsGrid,
  BlurCircle,
  FooterWrapper
} from "./styles";

// Sample events data
// Sample events data with ids for routing
const events = [
  {
    id: 1,
    title: "Event 1",
    date: "01/02/2025",
    subtitle: "Event 1 Subtitle",
    description: "Event 1 Description",
    imageSrc: "/vest-logo.png"
  },
  {
    id: 2,
    title: "Event 2",
    date: "02/15/2025",
    subtitle: "Event 2 Subtitle",
    description: "Event 2 Description",
    imageSrc: "/vest-logo.png"
  },
  {
    id: 3,
    title: "Event 3",
    date: "03/21/2025",
    subtitle: "Event 3 Subtitle",
    description: "Event 3 Description",
    imageSrc: "/vest-logo.png"
  },
  {
    id: 4,
    title: "Event 4",
    date: "04/10/2025",
    subtitle: "Event 4 Subtitle",
    description: "Event 4 Description",
    imageSrc: "/vest-logo.png"
  }
];

const Events = () => {
  return (
    <Wrapper>
      <BlurCircle />
      <Inner>
        <ContentContainer>
          <EventsHeader>
            <h1>Events</h1>
            <h2>Bringing founders, ideas, and members together.</h2>
            <p>
            At VEST, our events are designed to fuel inspiration, spark connection, and deepen your understanding of the startup world. From founder talks and VC panels to startup office visits, VEST gives members direct access to the people and places shaping tech. 
            </p>
            <p>
            Our events are where insight meets connection, and big ideas begin.
            </p>
          </EventsHeader>
          
          <EventsGrid>
            {events.map((event) => (
              <Event
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                subtitle={event.subtitle}
                description={event.description}
                imageSrc={event.imageSrc}
              />
            ))}
          </EventsGrid>
        </ContentContainer>
      </Inner>
    </Wrapper>
  );
};

export default Events;