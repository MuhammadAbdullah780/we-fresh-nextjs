import styled from "styled-components";
import { FlexColumnStyled } from "../../common/GlobalStyles/styled";
import tw from "twin.macro";

export const BusinessWrapper = styled(FlexColumnStyled)`
  ${tw`gap-4`}
`;

export const BusinessDescriptionsWrapper = styled(FlexColumnStyled)`
  ${tw`p-4 gap-3`}
`;
