"use client";
import Link from "next/link";
import { styled } from "styled-components";

export const LinkTo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background: var(--green);
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem !important;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;
