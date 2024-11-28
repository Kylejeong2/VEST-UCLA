'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

// Mock data - replace with your CMS data
const caseStudies = [
  {
    id: 1,
    companyName: 'TechFlow AI',
    tagline: 'Revolutionizing workflow automation with AI',
    description: 'How TechFlow AI raised their Series A and scaled to 100k users...',
    metrics: {
      raised: '$5M',
      growth: '300%',
      users: '100k+'
    },
    logo: '/case-studies/techflow.png',
    coverImage: '/case-studies/techflow-cover.jpg',
    industry: 'AI/ML',
  },
  {
    id: 2,
    companyName: 'GreenCommerce',
    tagline: 'Sustainable e-commerce platform',
    description: 'Building a carbon-neutral marketplace for eco-friendly products...',
    metrics: {
      raised: '$3M',
      growth: '200%',
      impact: '50k tons CO₂'
    },
    logo: '/case-studies/greencommerce.png',
    coverImage: '/case-studies/greencommerce-cover.jpg',
    industry: 'E-commerce',
  },
  // Add more case studies
];

const CaseStudiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const filteredStudies = caseStudies.filter(study => {
    const matchesSearch = study.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <Wrapper>
      <Inner>
        <Header>
          <h1>Case Studies</h1>
          <p>Success stories from our portfolio companies</p>
        </Header>
        
        <SearchBar>
          <input
            type="text"
            placeholder="Search companies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>

        <Industries>
          {['All', 'AI/ML', 'E-commerce', 'FinTech', 'HealthTech'].map(industry => (
            <IndustryButton
              key={industry}
              active={selectedIndustry === industry}
              onClick={() => setSelectedIndustry(industry)}
            >
              {industry}
            </IndustryButton>
          ))}
        </Industries>

        <CaseStudyGrid>
          {filteredStudies.map(study => (
            <CaseStudyCard key={study.id}>
              <Link href={`/case-studies/${study.id}`}>
                <ImageContainer>
                  <Image src={study.coverImage} alt={study.companyName} fill style={{ objectFit: 'cover' }} />
                  <LogoOverlay>
                    <Image src={study.logo} alt={`${study.companyName} logo`} width={60} height={60} />
                  </LogoOverlay>
                </ImageContainer>
                <CardContent>
                  <Industry>{study.industry}</Industry>
                  <h2>{study.companyName}</h2>
                  <Tagline>{study.tagline}</Tagline>
                  <p>{study.description}</p>
                  <Metrics>
                    {Object.entries(study.metrics).map(([key, value]) => (
                      <Metric key={key}>
                        <MetricValue>{value}</MetricValue>
                        <MetricLabel>{key}</MetricLabel>
                      </Metric>
                    ))}
                  </Metrics>
                </CardContent>
              </Link>
            </CaseStudyCard>
          ))}
        </CaseStudyGrid>
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
  max-width: 1440px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 4rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  p {
    color: var(--link-color);
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const SearchBar = styled.div`
  margin-bottom: 2rem;

  input {
    width: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.05);
    color: var(--white);
    font-size: 1rem;

    &::placeholder {
      color: var(--link-color);
    }

    &:focus {
      outline: none;
      border-color: var(--emerald);
    }
  }
`;

const Industries = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const IndustryButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: 1px solid ${props => props.active ? 'var(--emerald)' : 'rgba(255, 255, 255, 0.1)'};
  background: ${props => props.active ? 'var(--emerald)' : 'transparent'};
  color: var(--white);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--emerald);
  }
`;

const CaseStudyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const CaseStudyCard = styled.article`
  border-radius: 1rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const LogoOverlay = styled.div`
  position: absolute;
  bottom: -30px;
  left: 20px;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: var(--Background);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div`
  padding: 2rem 1.5rem 1.5rem;

  h2 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    font-weight: 500;
  }
`;

const Industry = styled.span`
  color: var(--emerald);
  font-size: 0.875rem;
  font-weight: 500;
`;

const Tagline = styled.div`
  color: var(--white);
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Metrics = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const MetricValue = styled.div`
  color: var(--emerald);
  font-size: 1.25rem;
  font-weight: 500;
`;

const MetricLabel = styled.div`
  color: var(--link-color);
  font-size: 0.875rem;
  text-transform: capitalize;
`;

export default CaseStudiesPage;
