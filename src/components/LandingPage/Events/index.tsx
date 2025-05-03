"use client";

import Event from "@/components/ui/Event";
import {
  Wrapper,
  Inner,
  ContentContainer,
  EventsHeader,
  EventsGrid,
  BlurCircle
} from "./styles";

// Sample events data
const events = [
  {
    id: 1,
    title: "Event Name",
    date: "01/02/2025",
    description: "Lorem ipsum dolor sit amet consectetur. Aenean a aliquam tortor non tempor justo quis viverra. Nulla sit augue facilisi posuere.",
    imageSrc: ""
  },
  {
    id: 2,
    title: "Event Name",
    date: "01/02/2025",
    description: "Lorem ipsum dolor sit amet consectetur. Aenean a aliquam tortor non tempor justo quis viverra. Nulla sit augue facilisi posuere.",
    imageSrc: ""
  },
  {
    id: 3,
    title: "Event Name",
    date: "01/02/2025",
    description: "Lorem ipsum dolor sit amet consectetur. Aenean a aliquam tortor non tempor justo quis viverra. Nulla sit augue facilisi posuere.",
    imageSrc: ""
  },
  {
    id: 4,
    title: "Event Name",
    date: "01/02/2025",
    description: "Lorem ipsum dolor sit amet consectetur. Aenean a aliquam tortor non tempor justo quis viverra. Nulla sit augue facilisi posuere.",
    imageSrc: ""
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
                title={event.title}
                date={event.date}
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