import { LinkTo } from "./styles";
import { ChevronRight } from "lucide-react";

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="https://docs.google.com/forms/d/e/1FAIpQLSdq-_RVgDjN3ePFlqIbCoAJEy6Msy7YZ2MTPIItZgR5oji3Tw/viewform"
    >
      What We Do
      <ChevronRight />
    </LinkTo>
  );
};

export default GetStartedButton;
