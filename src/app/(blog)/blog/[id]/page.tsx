"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const blogPosts = {
  1: {
    title: "Understanding Venture Capital",
    content: `
      <h2>Introduction to Venture Capital</h2>
      <p>Venture capital (VC) is a form of private equity financing that is provided by venture capital firms or funds to startups, early-stage, and emerging companies that have been deemed to have high growth potential or which have demonstrated high growth.</p>
      
      <h2>How Venture Capital Works</h2>
      <p>VCs typically invest in companies that have a novel technology or business model in high-growth industries like IT, clean technology, or biotechnology. The investment comes with active involvement in the company's operations, often including a board seat.</p>
      
      <h2>The Investment Process</h2>
      <p>The VC investment process typically includes several stages:</p>
      <ul>
        <li>Deal Sourcing</li>
        <li>Due Diligence</li>
        <li>Investment Decision</li>
        <li>Portfolio Management</li>
        <li>Exit Strategy</li>
      </ul>
    `,
    date: "2024-01-15",
    author: "John Doe",
    authorRole: "VC Associate",
    authorImage: "/team/john.jpg",
    coverImage: "/blog/vc-101.jpg",
    category: "Education",
    readTime: "5 min read",
  },
  // Add more blog posts
};

const BlogPost = () => {
  const params = useParams();
  const post = blogPosts[Number(params.id) as keyof typeof blogPosts];

  if (!post) {
    return (
      <Wrapper>
        <Inner>
          <h1>Post not found</h1>
          <BackLink href="/blog">← Back to blog</BackLink>
        </Inner>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Inner>
        <BackLink href="/blog">← Back to blog</BackLink>

        <Header>
          <Category>{post.category}</Category>
          <h1>{post.title}</h1>
          <MetaInfo>
            <AuthorInfo>
              <AuthorImage>
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={40}
                  height={40}
                />
              </AuthorImage>
              <div>
                <AuthorName>{post.author}</AuthorName>
                <AuthorRole>{post.authorRole}</AuthorRole>
              </div>
            </AuthorInfo>
            <PostInfo>
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <Dot>•</Dot>
              <span>{post.readTime}</span>
            </PostInfo>
          </MetaInfo>
        </Header>

        <CoverImage>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </CoverImage>

        <Content dangerouslySetInnerHTML={{ __html: post.content }} />
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 0;
  background: var(--Background);
`;

const Inner = styled.div`
  width: 90%;
  max-width: 800px;
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
  margin-bottom: 3rem;

  h1 {
    font-size: 3.5rem;
    font-weight: 400;
    margin: 1rem 0;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const Category = styled.span`
  color: var(--emerald);
  font-size: 1rem;
  font-weight: 500;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

const AuthorName = styled.div`
  font-weight: 500;
`;

const AuthorRole = styled.div`
  color: var(--link-color);
  font-size: 0.875rem;
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--link-color);
  font-size: 0.875rem;
`;

const Dot = styled.span`
  color: var(--link-color);
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
  font-size: 1.125rem;
  line-height: 1.8;

  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin: 2rem 0 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: var(--link-color);
  }

  ul {
    margin: 1rem 0 1.5rem 2rem;
    color: var(--link-color);

    li {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    h2 {
      font-size: 1.5rem;
    }
  }
`;

export default BlogPost;
