import { styled } from "styled-components";
import { FlexColumnStyled } from "../../common/GlobalStyles/styled";
import tw from "twin.macro";

export const AppDetailsWrapper = styled(FlexColumnStyled)`
  ${tw`gap-3 !items-start flex items-center justify-center flex-col rounded-10 transition-colors relative max-w-[599px] w-full  text-left`}
  &:hover {
    ${tw`bg-blue-light`}
  }
`;

export const AbsoluteDiv = styled.div`
  ${tw`absolute h-6 w-6 hidden sm:group-hover:block transition-colors rounded-bl-md top-[calc(50%-12px)] -left-[12px] rotate-45 bg-blue-light`}
`;
