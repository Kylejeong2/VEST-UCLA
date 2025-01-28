import Image from "next/image";
import ic_copyright from "../../../../public/svgs/ic_copyright.svg";
import { SignInButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const linksArr = [
  {
    title: "About",
    links: [
      { text: "Program", type: "internal" },
      { text: "Team", type: "external", url: "https://www.vestucla.com/team" }, //tentative based on merge
      { text: "Mission", type: "external", url: "https://elderly-harpymimus-3b1.notion.site/VEST-Manifesto-15e069ddeded80378d36c63dc706a1b9" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Timeline", type: "internal" },
      { text: "FAQ", type: "internal" },
      { text: "Apply Now", type: "internal" },
    ],
  },
  {
    title: "Contact",
    links: [
      { text: "Email", type: "external", url: "mailto:bruinventurelab@gmail.com" },
      { text: "LinkedIn", type: "external", url: "https://linkedin.com/company/vestucla" },
    ],
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
                        onClick={() => {
                          if (link.type === 'internal') {
                            linkMap[link.text] && scrollToSection(linkMap[link.text]);
                          } else {
                            window.open(link.url, '_blank');
                          }
                        }}
                        className={link.type === 'internal' ? (linkMap[link.text] ? "clickable" : "") : "clickable"}
                      >
                        {link.text}
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
                <Link href="/sign-in" className="text-white hover:text-gray-300 transition-colors">
                  <StyledSignInButton as="a">Member Sign In</StyledSignInButton>
                </Link>
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
