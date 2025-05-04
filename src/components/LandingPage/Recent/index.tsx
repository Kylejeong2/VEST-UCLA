"use client";
import Image from "next/image";
import {
  Wrapper,
  Inner,
  Header,
  HeaderContainer,
} from "./styles";
import MaskText from "@/components/Common/MaskText";
import { useIsMobile } from "../../../../libs/useIsMobile";
import { headerPhrase, mobileHeaderPhrase } from "./constants";
import RecentEvent from "@/components/ui/RecentEvent";

// Sample events data
const recentEvents = [
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
];

const Recent = () => {
    const isMobile = useIsMobile();
  
    return (
        <Wrapper>
            <Inner>
                <HeaderContainer>
                    <Header>
                        {isMobile ? (
                            <MaskText phrases={mobileHeaderPhrase} tag="h1" />
                        ) : (
                            <MaskText phrases={headerPhrase} tag="h1" />
                        )}
                    </Header>
                </HeaderContainer>
                    {recentEvents.map((recentEvent) => (
                        <RecentEvent
                            key={recentEvent.id}
                            title={recentEvent.title}
                            date={recentEvent.date}
                            description={recentEvent.description}
                            imageSrc={recentEvent.imageSrc}
                        />
                    ))}
            </Inner>
        </Wrapper>
    );
};

export default Recent;