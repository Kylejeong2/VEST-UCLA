import { LinkTo } from "./styles";
import { ChevronRight } from "lucide-react";

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
        background: "linear-gradient(90deg, #2165C8, #0A2040)",
        borderRadius: "76px",
        boxShadow: "0px 4px 12px 0px rgba(0,0,0,0.10), 0px 0px 36px 6px rgba(55,125,226,1.00)",
        border: "0.2px solid #efefef",
        backdropFilter: "blur(3px)",
        mixBlendMode: "screen",
        fontFamily: "Inter, sans-serif",
        fontSize: "1.75rem",
        fontWeight: "400",
      }}
      href="https://docs.google.com/forms/d/e/1FAIpQLSdq-_RVgDjN3ePFlqIbCoAJEy6Msy7YZ2MTPIItZgR5oji3Tw/viewform"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        What We Do
        <ChevronRight />
      </div>
    </LinkTo>
  );
};

export default GetStartedButton;
