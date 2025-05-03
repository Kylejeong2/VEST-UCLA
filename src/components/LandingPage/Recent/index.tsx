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
            </Inner>
        </Wrapper>
    );
};

export default Recent;