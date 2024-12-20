"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

// Mock data - replace with your CMS data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Venture Capital",
    excerpt:
      "A comprehensive guide to understanding how venture capital works...",
    date: "2024-01-15",
    image: "/blog/vc-101.jpg",
    category: "Education",
  },
  {
    id: 2,
    title: "Top Startup Trends in 2024",
    excerpt:
      "Exploring the most promising startup trends that are shaping the future...",
    date: "2024-01-10",
    image: "/blog/trends.jpg",
    category: "Trends",
  },
  // Add more mock posts
];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Wrapper>
      <Inner>
        <Header>
          <h1>Bruin Venture Lab Blog</h1>
          <p>Insights from UCLA's premier VC/Startup community</p>
        </Header>

        <SearchBar>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>

        <Categories>
          {["All", "Education", "Trends", "Startups", "VC"].map((category) => (
            <CategoryButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </Categories>

        <BlogGrid>
          {filteredPosts.map((post) => (
            <BlogCard key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <ImageContainer>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </ImageContainer>
                <CardContent>
                  <Category>{post.category}</Category>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  {/* <Date children={new Date(post.date).toLocaleDateString()} /> */}
                </CardContent>
              </Link>
            </BlogCard>
          ))}
        </BlogGrid>
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0; // Reduced top padding
  background: var(--Background);
`;

const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 4rem;

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

const Categories = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: 1px solid
    ${(props) => (props.active ? "var(--emerald)" : "rgba(255, 255, 255, 0.1)")};
  background: ${(props) => (props.active ? "var(--emerald)" : "transparent")};
  color: var(--white);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--emerald);
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled.article`
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

const CardContent = styled.div`
  padding: 1.5rem;

  h2 {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    font-weight: 500;
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const Category = styled.span`
  color: var(--emerald);
  font-size: 0.875rem;
  font-weight: 500;
`;

const Date = styled.span`
  color: var(--link-color);
  font-size: 0.875rem;
`;

export default BlogPage;
