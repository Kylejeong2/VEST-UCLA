import { LinkTo } from "./styles";

const GetStartedButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      href="https://docs.google.com/forms/d/e/1FAIpQLSdq-_RVgDjN3ePFlqIbCoAJEy6Msy7YZ2MTPIItZgR5oji3Tw/viewform"
    >
      Apply Here
    </LinkTo>
  );
};

export default GetStartedButton;
