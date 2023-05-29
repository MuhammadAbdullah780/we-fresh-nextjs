import styled from "styled-components";
import {
  FlexCenterStyled,
  FlexColumnStyled,
} from "../../common/GlobalStyles/styled";
import tw from "twin.macro";

export const AppSectionWrapper = styled(FlexColumnStyled)`
  ${tw`gap-4`}
`;

export const AppSectionDescriptionWrapper = styled(FlexColumnStyled)`
  ${tw`w-full m-5 px-3 sm:px-0 gap-2`}
`;

export const AppSectionLinksWrapper = styled(FlexCenterStyled)`
  ${tw`gap-3 !flex-col md:!flex-row`}
`;
