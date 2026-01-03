"use client";

import {
  Wrapper,
  Inner,
  Header,
  Title,
  ViewAllLink,
  EventsGrid,
  EventCard,
  EventImage,
  EventContent,
  EventTitle,
  EventDescription,
  EventDate,
} from "./styles";
import { events } from "@/data/events";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const Recent = () => {
  // Take only the first 3 events for the landing page
  const displayEvents = events.slice(0, 3);

  return (
    <Wrapper>
      <Inner>
        <Header>
          <Title>
            <span className="white">Recent </span>
            <span className="gradient">Events</span>
          </Title>
          <ViewAllLink href="/events">
            <span>View All</span>
            <ArrowRight size={20} weight="bold" />
          </ViewAllLink>
        </Header>

        <EventsGrid>
          {displayEvents.map((event, index) => (
            <EventCard key={index}>
              <EventImage>
                <Image
                  src={event.imageSrc}
                  alt={event.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </EventImage>
              <EventContent>
                <div>
                  <EventTitle>{event.title}</EventTitle>
                  <EventDescription>{event.description}</EventDescription>
                </div>
                <EventDate>{event.date}</EventDate>
              </EventContent>
            </EventCard>
          ))}
        </EventsGrid>
      </Inner>
    </Wrapper>
  );
};

export default Recent;
