"use client";

import Event from "@/components/ui/Event";
import Footer from "@/components/LandingPage/Footer";
import { events } from "@/data/events";
import {
  Wrapper,
  Inner,
  ContentContainer,
  EventsHeader,
  EventsGrid,
  BlurCircle,
  FooterWrapper
} from "./styles";

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