import { styled } from "styled-components";
import tw from "twin.macro";
import { FlexCenterStyled } from "../../common/GlobalStyles/styled";

export const ServicesSectionWrapper = styled.div`
  ${tw`sm:space-y-32 w-full py-5 sm:py-10`}
`;

export const SliderContainer = styled.div`
  ${tw`gap-3 space-y-5 lg:space-y-10 py-5`}
`;

export const OurAppContainer = styled(FlexCenterStyled)`
  ${tw`gap-8 flex-col pt-14 sm:pt-0 md:h-[1069px] lg:max-h-[770px] lg:flex-row w-full !justify-center lg:justify-evenly`}
`;

export const ServicesImageWrapper = styled.div`
  ${tw`absolute h-[319px] sm:h-[580px] w-full max-w-[161px] sm:max-w-[291px]`}
`;

export const OurAppLeftContainer = styled(FlexCenterStyled)`
  ${tw`relative h-max`}
`;

export const YellowSvgWrapper = styled.div`
  ${tw`sm:h-[444px] h-[242px] w-[280px] sm:w-[448px]`}
`;

export const ServiceDescriptionsWrapper = styled.div`
  ${tw`gap-3  pt-[17px] px-[20px] sm:px-0 sm:!pt-[5px] sm:mt-7`}
`;
