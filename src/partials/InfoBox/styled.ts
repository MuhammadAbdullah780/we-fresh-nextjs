import tw from "twin.macro";
import { FlexColumnStyled } from "../../common/GlobalStyles/styled";
import styled from "styled-components";

export const InfoBoxContainer = styled(FlexColumnStyled)`
  ${tw`w-[280px] sm:w-[380px] rounded-10 pb-[10px] sm:pb-[20px] !justify-end gap-3 border-border border-2 h-[199px]`}
`;
