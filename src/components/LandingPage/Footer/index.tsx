import Image from "next/image";
import ic_copyright from "../../../../public/svgs/ic_copyright.svg";
import { SignInButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const linksArr = [
  {
    title: "About",
    links: ["Program", "Team", "Mission"],
  },
  {
    title: "Resources",
    links: ["Timeline", "FAQ", "Apply Now"],
  },
  {
    title: "Contact",
    links: ["Join Us", "Email", "LinkedIn"],
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
  CopyRight,
  ManifestoLinkContainer,
  ManifestoLink,
  SignInButton as StyledSignInButton,
} from "./styles";

const Footer = () => {
  const { isSignedIn } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const linkMap: { [key: string]: string } = {
    Program: "intro",
    Timeline: "timeline",
    FAQ: "faq",
    "Join Us": "join",
    "Apply Now": "hero",
  };

  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <Image
            src="https://utfs.io/f/S5FODHw5IM4mVeHOqfYhcQ2vJK1dAe5mOnIjiySl03wFfWDM"
            width={150}
            height={150}
            alt="VEST_footer_logo"
          />
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li
                        key={i}
                        onClick={() =>
                          linkMap[link] && scrollToSection(linkMap[link])
                        }
                        className={linkMap[link] ? "clickable" : ""}
                      >
                        {link}
                      </li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>

            <ManifestoLinkContainer>
              <ManifestoLink href="https://elderly-harpymimus-3b1.notion.site/VEST-Manifesto-15e069ddeded80378d36c63dc706a1b9" target="_blank">
                VEST Manifesto
              </ManifestoLink>
              {isSignedIn ? (
                <Link href="/admin" passHref>
                  <StyledSignInButton as="a">Admin Panel</StyledSignInButton>
                </Link>
              ) : (
                <SignInButton mode="modal">
                  <StyledSignInButton>Member Sign In</StyledSignInButton>
                </SignInButton>
              )}
            </ManifestoLinkContainer>

          </FooterMiddle>
          <FooterBottom>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              VEST @ UCLA.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
