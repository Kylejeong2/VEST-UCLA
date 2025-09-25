import Image from "next/image";
import ic_copyright from "../../../../public/svgs/ic_copyright.svg";
import { SignInButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
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
  SignInButton as StyledSignInButton,
  SocialIcons,
  SocialIcon,
} from "./styles";
import { padding } from "tailwindcss/defaultTheme";

const Footer = () => {
  const { isSignedIn } = useAuth();

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
                            href={
                              link.text === "Home"
                                ? "/"
                                : link.text === "Join Us"
                                  ? "/join"
                                  : `/${link.text.toLowerCase()}`
                            }
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
              {/* {isSignedIn ? (
                <Link href="/admin" passHref>
                  <StyledSignInButton as="a">Admin Panel</StyledSignInButton>
                </Link>
              ) : (
                <Link href="/sign-in" className="text-white hover:text-gray-300 transition-colors">
                  <StyledSignInButton as="a">Member Sign In</StyledSignInButton>
                </Link>
              )} */}
            </ManifestoLinkContainer>
          </FooterMiddle>
          <FooterBottom>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              <p>VEST at UCLA.</p>
            </CopyRight>
            <SocialIcons>
              <SocialIcon
                href="https://www.linkedin.com/company/vestucla/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  width="32"
                  height="32"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/vestucla/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"
                  />
                </svg>
              </SocialIcon>
            </SocialIcons>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
