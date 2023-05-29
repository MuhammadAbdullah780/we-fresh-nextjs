import { styled } from "styled-components";
import { FlexCenterStyled } from "../../common/GlobalStyles/styled";
import tw from "twin.macro";

export const FindUsWrapper = styled(FlexCenterStyled)`
  ${tw`md:my-24 gap-28 md:gap-14 flex-col md:!flex-row h-[calc(100%-80px)] w-full md:w-[calc(100%-80px)] !justify-evenly overflow-x-visible`}
`;

export const FindUsLeftContainer = styled.div`
  ${tw`flex w-full gap-4 flex-col`}
`;

export const FindUsRightContainer = styled.div`
  ${tw`h-full max-h-[207px] sm:max-h-[350px] md:max-h-[420px] lg:max-h-[702px]  w-full max-w-[694px] flex items-center justify-center`}
`;

export const FindUsImageWrapper = styled.div`
  ${tw`flex-1 w-full h-[207px] sm:h-full max-w-[310px] sm:max-w-[420px] md:max-w-[540px] overflow-visible`}
`;
