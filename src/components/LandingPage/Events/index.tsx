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
  FooterWrapper,
  BackgroundGlow,
  EventsText,
  EventsTitle,
  TopRow,
  BlurCircle,
  TextContainer
} from "./styles";

const Events = () => {
  return (
    <Wrapper>
      <BackgroundGlow />
      <Inner>
        <ContentContainer>
          <EventsHeader>
            Our <span className="italic">Events</span>
          </EventsHeader>
          <TextContainer>
            <EventsTitle>Bringing founders, ideas, and members together.</EventsTitle>
            <EventsText>
              <p>At VEST, our events are designed to fuel inspiration, spark connection, and deepen your understanding of the startup world. From founder talks and VC panels to startup office visits, VEST gives members direct access to the people and places shaping tech.</p>
              <p>Our events are where insight meets connection, and big ideas begin.</p>
            </EventsText>
          </TextContainer>
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
      <BlurCircle />
    </Wrapper>
  );
};

export default Events;