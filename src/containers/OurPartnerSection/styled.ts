import { styled } from "styled-components";
import tw from "twin.macro";
import {
  FlexCenterStyled,
  FlexColumnStyled,
} from "../../common/GlobalStyles/styled";

export const OurPartnersContainer = styled(FlexCenterStyled)`
  ${tw`!flex-col lg:!flex-row  !justify-start w-full md:gap-5 gap-3`}
`;

export const OurPartnersContentWrapper = styled(FlexCenterStyled)`
  ${tw`w-[100%] lg:w-[50%]`}
`;

export const OurPartnersLeftContainer = styled(FlexColumnStyled)`
  ${tw`relative gap-4 my-10 px-10 h-max sm:my-0`}
`;

export const OurPartnersContentContainer = styled(FlexColumnStyled)`
  ${tw`absolute gap-4`}
`;

export const OurPartnersImagesContainer = styled(FlexCenterStyled)`
  ${tw`w-[100%] h-[300px] md:h-[400px] xl:h-[500px] `}
`;

export const OurPartnersImagesWrapper = styled(FlexCenterStyled)`
  ${tw`relative h-full w-[100%] sm:w-[60%] lg:w-[100%]`}
`;
