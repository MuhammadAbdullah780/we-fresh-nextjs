import { styled } from "styled-components";
import {
  FlexCenterStyled,
  FlexColumnStyled,
} from "../../common/GlobalStyles/styled";
import tw from "twin.macro";

export const QueryContainer = styled(FlexColumnStyled)`
  ${tw`gap-5 py-2`}
`;

export const QuestionWrapper = styled(FlexColumnStyled)`
  ${tw`w-full h-max gap-2`}
`;

export const QueryDescription = styled(FlexColumnStyled)`
  ${tw`gap-6 py-3 w-[90%] sm:w-full h-max`}
`;

export const InfoBoxWrapper = styled(FlexCenterStyled)`
  ${tw`w-full px-3 !flex-col sm:!flex-row  h-max gap-3`}
`;
