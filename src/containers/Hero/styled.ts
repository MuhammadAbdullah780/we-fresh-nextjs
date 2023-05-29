import { styled } from "styled-components";
import {
  FlexCenterStyled,
  FlexColumnStyled,
} from "../../common/GlobalStyles/styled";
import tw from "twin.macro";

export const HeroContentWrapper = styled(FlexCenterStyled)`
  ${tw`gap-[5rem] sm:gap-[10rem] lg:gap-7 w-full flex-col lg:flex-row !justify-center lg:!justify-around`}
`;

export const LeftDivWrapper = styled(FlexColumnStyled)`
  ${tw`p-7 lg:p-5 gap-5  lg:!items-start`}
`;

export const HeroIconWrapper = styled(FlexColumnStyled)`
  ${tw`lg:gap-[24px] gap-[10px] md:gap-[17px] lg:!items-start`}
`;

export const HeroLinkWrapper = styled(FlexCenterStyled)`
  ${tw`!items-start gap-5`}
`;

export const HeroImageContainer = styled.div`
  ${tw`w-full max-w-[291px]  relative`}
`;

export const HeroImageWrapper = styled.div`
  ${tw`h-[319px] relative sm:h-[580px] block m-auto  max-w-[161px] sm:max-w-[291px]`}
`;
