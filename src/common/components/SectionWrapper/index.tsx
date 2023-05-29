import { SectionContainer, Wrapper } from "./styled";
import { SectionWrapperType } from "./types";
type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  zIndex?: number;
} & SectionWrapperType;

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  zIndex,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  overFlow,
  display,
  alignItems,
  justifyContent,
  height,
  backgroundColor,
  maxWidth,
}) => {
  return (
    <SectionContainer zIndex={zIndex}>
      <Wrapper
        className={className}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        overFlow={overFlow}
        display={display}
        alignItems={alignItems}
        justifyContent={justifyContent}
        height={height}
        backgroundColor={backgroundColor}
        maxWidth={maxWidth}>
        {children}
      </Wrapper>
    </SectionContainer>
  );
};

// paddingTop?: NumberMediaProps;
// paddingBottom?: NumberMediaProps;
// paddingLeft?: NumberMediaProps;
// paddingRight?: NumberMediaProps;
// overFlow?: "hidden" | "auto";
// display?: "block" | "flex";
// alignItems?: "center" | "flex-start" | "flex-end";
// justifyContent?: "center" | "flex-start" | "flex-end";
// height?: NumberMediaProps;
// backgroundColor?: string;
// maxWidth?: string;

export default SectionWrapper;
