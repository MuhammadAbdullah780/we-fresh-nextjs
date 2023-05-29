import styled from "styled-components";
import tw from "twin.macro";
import { FlexColumnStyled } from "../../common/GlobalStyles/styled";

export const AccordionWrapper = styled(FlexColumnStyled)`
  ${tw`max-w-[780px] overflow-hidden gap-[12px] transition-all sm:!items-start w-full bg-white`}
`;

export const AccordionQuestionContainer = styled.div`
  ${tw`w-full p-[20px] md:px-[41px] md:rounded-10 transition-all border-b-2 sm:border-2 border-b-border sm:border-border `}
`;

export const AccordionAnswerWrapper = styled.div`
  ${tw`h-[0px] transition-all duration-300`}
`;

export const AccordionAnswerContainer = styled.div`
  ${tw`w-full flex items-start md:mt-[12px] pt-[14px] md:rounded-10 md:pt-[20px] pr-[59px] md:pr-[60px] pb-[15px] md:pb-[28px] pl-[20px] md:pl-[41px] justify-center  duration-300 border-b-2 sm:border-2 gap-[14px] md:gap-[12px] md:border-txt-blue border-b-border sm:border-border flex-col overflow-hidden`}
`;
