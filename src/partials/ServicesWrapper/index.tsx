import { Paragraph, ServicesWrapper, StyledImageWrapper } from "./styled";

type ServicesWrapperProps = {
  src: string;
  text: string;
};

const index = ({ src, text }: ServicesWrapperProps) => {
  return (
    <ServicesWrapper className="group">
      <StyledImageWrapper>
        <img src={src} className="w-full h-full" alt={text} />
      </StyledImageWrapper>
      <Paragraph className="f-22">{text}</Paragraph>
    </ServicesWrapper>
  );
};

export default index;
