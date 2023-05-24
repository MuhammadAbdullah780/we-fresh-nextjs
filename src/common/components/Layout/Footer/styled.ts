import tw from "twin.macro";
import styled from "styled-components";
import {
  FlexCenterStyled,
  FlexColumnStyled,
} from "../../../GlobalStyles/styled";

export const FooterStyled = styled(FlexColumnStyled)`
  ${tw`gap-7 pt-16 pb-2 px-4 sm:px-5 lg:px-10 bg-bg-blue`}
`;

export const FooterWrapper = styled(FlexColumnStyled)`
  ${tw`w-full !items-start h-max`}
`;

export const WrapperTop = styled(FlexCenterStyled)`
  ${tw`py-5 !items-start md:py-5 gap-3 w-full !flex-col md:!flex-row`}
`;

export const WrapperBottom = styled(FlexColumnStyled)`
  ${tw`w-full gap-3`}
`;

export const CenterDescriptonsWrapper = styled(FlexCenterStyled)`
  ${tw`gap-4 md:flex-row !items-start  flex-col md:px-3`}
`;

export const SocialIconsWrapper = styled(FlexColumnStyled)`
  ${tw`gap-3 w-full md:!w-fit md:!justify-start`}
  .social-icon-link {
    ${tw`relative w-[45px] h-[45px]`}
  }
`;

export const AvailableOnHeading = styled.h6`
  ${tw`w-full text-center md:w-max`}
`;

export const HR = styled.hr`
  ${tw`w-[calc(100%+80px)] bg-border h-[2px]`}
`;

export const ParagraphWrapper = styled(FlexCenterStyled)`
  ${tw`w-full md:!w-[730px] md:!justify-start`}
  .footer-para {
    ${tw`!max-w-max w-full`}
  }
`;
