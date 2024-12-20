"use client";
import { useEffect, useRef } from "react";
import { Body, LineMask } from "./styles";

type Props = {
  phrases: string[];
  tag: string;
};

const MaskText = ({ phrases = [], tag }: Props) => {
  const body = useRef(null);

  useEffect(() => {
    // ... existing effect code ...
  }, []);

  if (!Array.isArray(phrases)) {
    return null;
  }

  return (
    <Body ref={body}>
      {phrases.map((phrase, index) => {
        return (
          <LineMask key={index}>
            {tag === "h1" ? (
              <h1>{phrase}</h1>
            ) : tag === "h2" ? (
              <h2>{phrase}</h2>
            ) : tag === "h3" ? (
              <h3>{phrase}</h3>
            ) : tag === "p" ? (
              <p>{phrase}</p>
            ) : null}
          </LineMask>
        );
      })}
    </Body>
  );
};

export default MaskText;
