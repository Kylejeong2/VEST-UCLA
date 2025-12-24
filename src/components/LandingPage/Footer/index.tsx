import Image from "next/image";
import ic_copyright from "../../../../public/svgs/ic_copyright.svg";
import React from "react";
import Link from "next/link";

type InternalLink = {
  text: string;
  type: "internal";
};

type ExternalLink = {
  text: string;
  type: "external";
  url: string;
};

type LinkItem = InternalLink | ExternalLink;

const linksArr = [
  {
    title: "Navigation",
    links: [
      { text: "Home", type: "internal" },
      { text: "Team", type: "internal" },
      { text: "Events", type: "internal" },
      { text: "About", type: "internal" },
      { text: "Join Us", type: "internal" },
    ] as LinkItem[],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  FooterTop,
  CopyRight,
  ManifestoLinkContainer,
  ManifestoLink,
} from "./styles";

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterTop>
          <FooterLogo>
            <Image
              src="/images/VEST-logo-white.svg"
              width={100}
              height={100}
              alt="VEST_footer_logo"
            />
          </FooterLogo>
          <h1>VEST at UCLA</h1>
        </FooterTop>
        <FooterMainContent>
          <FooterMiddle>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h2>{l.title}</h2>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>
                        {link.type === "internal" ? (
                          <Link
                            href={link.text === "Home" ? "/" : 
                                  link.text === "Join Us" ? "/join" : 
                                  `/${link.text.toLowerCase()}`}
                            className="cursor-pointer hover:text-[#4299e1]"
                          >
                            {link.text}
                          </Link>
                        ) : (
                          <a
                            href={link.type === "external" ? link.url : "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer hover:text-[#4299e1]"
                          >
                            {link.text}
                          </a>
                        )}
                      </li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>

            <ManifestoLinkContainer>
            <ManifestoLink href="https://substack.com/@vestucla">
                Join Our Newsletter
              </ManifestoLink>
            </ManifestoLinkContainer>

          </FooterMiddle>
          <FooterBottom>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              <p>VEST at UCLA.</p>
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
