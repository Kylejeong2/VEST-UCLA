"use client";

import { FC } from "react";
import styled from "styled-components";

// Styled Components
const TimelineContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  color: white;
`;

const TimelineTitle = styled.h2`
  font-size: 4rem;
  margin-bottom: 60px;
  text-align: center;
  position: relative;
  display: block;
  color: #67b7ff;
  width: 100%;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    width: 120px;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const TimelineWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
`;

const TimelineLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateX(-50%);
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 90px;
  width: 100%;
  position: relative;

  &:last-child {
    padding-bottom: 0;
  }
`;

const TimelineNode = styled.div`
  position: absolute;
  left: 50%;
  width: 20px;
  height: 20px;
  background-color: #4285f4;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 2;
  margin-top: 10px;
`;

const TimelineContentLeft = styled.div`
  width: 45%;
  padding: 0 30px;
  position: relative;
  text-align: right;
  margin-right: 30px;
`;

const TimelineContentRight = styled.div`
  width: 45%;
  padding: 0 30px;
  position: relative;
  text-align: left;
  margin-left: 30px;
`;

const MonthYearBox = styled.div`
  display: inline-block;
  background-color: #4285f4;
  color: white;
  padding: 10px 30px;
  border-radius: 30px;
  font-weight: bold;
  margin: 10px 0;
  font-size: 1.1rem;
`;

const TimelineEventTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.3rem;
  color: white;
`;

const TimelineDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const Timeline: FC = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      date: "Month Year",
      title: "Application Open",
      description: "Your application is your chance to tell us about yourself—your passions, your curiosity, and why you want to be part of a community that's all about building, learning, and growing together in the startup world.",
    },
    {
      date: "Month Year",
      title: "Get To Know VEST",
      description: "Before diving in, take a moment to explore what VEST is all about. We're more than just a club—we're a collective of innovators, creators, and doers. Learn about our mission, culture, and the opportunities you'll find as a part of our community.",
    },
    {
      date: "Month Year",
      title: "Info Session",
      description: "Come meet the people behind VEST! Our info session is your chance to hear from current members, get a feel for our vibe, and ask any questions you might have. Whether you're curious about events, teams, or projects—we've got you covered.",
    },
    {
      date: "Month Year",
      title: "Coffee Chat*",
      description: "Let's get to know each other better. This is a casual, conversational interview where we want to hear about your interests, your background, and what excites you about startups and tech. No pressure—just real talk.",
    },
    {
      date: "Month Year",
      title: "Final Interview*",
      description: "We'll dive a bit deeper into your experiences, ideas, and what you'd bring to the VEST community. It's a chance to show us your energy, vision, and how you can help shape the future of our club.",
    },
  ];

  return (
    <TimelineContainer>
      <TimelineTitle>Timeline</TimelineTitle>
      <TimelineWrapper>
        <TimelineLine />
        {timelineEvents.map((event, index) => {
          const isLeft = index % 2 === 0;
          
          return (
            <TimelineItem key={index}>
              <TimelineNode />
              <TimelineContentLeft>
                {isLeft ? (
                  <MonthYearBox>{event.date}</MonthYearBox>
                ) : (
                  <>
                    <TimelineEventTitle>{event.title}</TimelineEventTitle>
                    <TimelineDescription>{event.description}</TimelineDescription>
                  </>
                )}
              </TimelineContentLeft>
              <TimelineContentRight>
                {!isLeft ? (
                  <MonthYearBox>{event.date}</MonthYearBox>
                ) : (
                  <>
                    <TimelineEventTitle>{event.title}</TimelineEventTitle>
                    <TimelineDescription>{event.description}</TimelineDescription>
                  </>
                )}
              </TimelineContentRight>
            </TimelineItem>
          );
        })}
      </TimelineWrapper>
    </TimelineContainer>
  );
};

export default Timeline;