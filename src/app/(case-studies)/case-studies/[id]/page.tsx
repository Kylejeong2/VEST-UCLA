"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const runtime = "edge";

// Mock data - replace with your CMS data
const caseStudies = {
  1: {
    companyName: "TechFlow AI",
    tagline: "Revolutionizing workflow automation with AI",
    overview: `TechFlow AI is transforming how businesses handle their workflows through advanced AI automation. Founded in 2022, they've quickly become a leader in the AI automation space.`,
    challenge: `The main challenge was scaling their infrastructure to handle rapid user growth while maintaining AI processing speed and accuracy.`,
    solution: `Working closely with our mentors, TechFlow AI:
    • Optimized their AI infrastructure for better performance
    • Implemented a scalable microservices architecture
    • Developed an innovative pricing model
    • Built strategic partnerships with enterprise clients`,
    results: {
      raised: "$5M Series A",
      growth: "300% YoY growth",
      users: "100k+ active users",
      efficiency: "85% workflow efficiency improvement",
    },
    testimonial: {
      quote:
        "VEST's mentorship was instrumental in helping us navigate our Series A and scale our infrastructure.",
      author: "Sarah Chen",
      role: "CEO, TechFlow AI",
    },
    logo: "/case-studies/techflow.png",
    coverImage: "/case-studies/techflow-cover.jpg",
    teamImage: "/case-studies/techflow-team.jpg",
    industry: "AI/ML",
  },
  // Add more case studies
};

const CaseStudy = () => {
  const params = useParams();
  const study = caseStudies[Number(params.id) as keyof typeof caseStudies];

  if (!study) {
    return (
      <Wrapper>
        <Inner>
          <h1>Case study not found</h1>
          <BackLink href="/case-studies">← Back to case studies</BackLink>
        </Inner>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Inner>
        <BackLink href="/case-studies">← Back to case studies</BackLink>

        <Header>
          <LogoContainer>
            <Image
              src={study.logo}
              alt={study.companyName}
              width={80}
              height={80}
            />
          </LogoContainer>
          <HeaderContent>
            <Industry>{study.industry}</Industry>
            <h1>{study.companyName}</h1>
            <Tagline>{study.tagline}</Tagline>
          </HeaderContent>
        </Header>

        <CoverImage>
          <Image
            src={study.coverImage}
            alt={study.companyName}
            fill
            style={{ objectFit: "cover" }}
          />
        </CoverImage>

        <Content>
          <Section>
            <h2>Overview</h2>
            <p>{study.overview}</p>
          </Section>

          <Section>
            <h2>Challenge</h2>
            <p>{study.challenge}</p>
          </Section>

          <Section>
            <h2>Solution</h2>
            <p style={{ whiteSpace: "pre-line" }}>{study.solution}</p>
          </Section>

          <ResultsSection>
            <h2>Results</h2>
            <ResultsGrid>
              {Object.entries(study.results).map(([key, value]) => (
                <ResultCard key={key}>
                  <ResultValue>{value}</ResultValue>
                  <ResultLabel>
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </ResultLabel>
                </ResultCard>
              ))}
            </ResultsGrid>
          </ResultsSection>

          <TeamImage>
            <Image
              src={study.teamImage}
              alt="Team"
              fill
              style={{ objectFit: "cover" }}
            />
          </TeamImage>

          <TestimonialSection>
            <Quote>{study.testimonial.quote}</Quote>
            <Author>
              <strong>{study.testimonial.author}</strong>
              <span>{study.testimonial.role}</span>
            </Author>
          </TestimonialSection>
        </Content>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 0;
  background: var(--Background);
`;

const Inner = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: var(--emerald);
  margin-bottom: 2rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const LogoContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  overflow: hidden;
  background: var(--Background);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 400;
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const Industry = styled.span`
  color: var(--emerald);
  font-size: 1rem;
  font-weight: 500;
`;

const Tagline = styled.div`
  color: var(--link-color);
  font-size: 1.25rem;
`;

const CoverImage = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 3rem;
  border-radius: 1rem;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const Content = styled.div`
  color: var(--white);
`;

const Section = styled.section`
  margin-bottom: 3rem;

  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  p {
    color: var(--link-color);
    font-size: 1.125rem;
    line-height: 1.8;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const ResultsSection = styled(Section)`
  margin: 4rem 0;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ResultCard = styled.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  text-align: center;
`;

const ResultValue = styled.div`
  color: var(--emerald);
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const ResultLabel = styled.div`
  color: var(--link-color);
  font-size: 1rem;
  text-transform: capitalize;
`;

const TeamImage = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin: 4rem 0;
  border-radius: 1rem;
  overflow: hidden;
`;

const TestimonialSection = styled.section`
  text-align: center;
  margin: 4rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
`;

const Quote = styled.blockquote`
  font-size: 1.5rem;
  color: var(--white);
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Author = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  strong {
    color: var(--white);
    font-size: 1.125rem;
  }

  span {
    color: var(--link-color);
    font-size: 1rem;
  }
`;

export default CaseStudy;
