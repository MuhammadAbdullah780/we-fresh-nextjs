import { SectionContainer, Wrapper } from "./styled";
type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  zIndex?: number;
};

const SectionWrapper = ({
  children,
  className,
  zIndex,
}: SectionWrapperProps) => {
  return (
    <SectionContainer zIndex={zIndex}>
      <Wrapper className={className}>{children}</Wrapper>
    </SectionContainer>
  );
};

export default SectionWrapper;
