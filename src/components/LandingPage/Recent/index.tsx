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
import { events } from "@/data/events";

const Recent = () => {
    const isMobile = useIsMobile();
    
    // Sort events by date (most recent first) and take only the first 3
    const recentEvents = events
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3);
  
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
                            slug={recentEvent.slug}
                        />
                    ))}
            </Inner>
        </Wrapper>
    );
};

export default Recent;