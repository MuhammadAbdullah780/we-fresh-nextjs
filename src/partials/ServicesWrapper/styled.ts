import styled from "styled-components";
import tw from "twin.macro";

export const ServicesWrapper = styled.div`
  ${tw`p-3 flex-col flex gap-3 transition-transform duration-200 items-center justify-center rounded-10`}
  &:hover {
    ${tw`scale-105`}
  }
`;

export const Paragraph = styled.p`
  ${tw`text-center !w-full !max-w-[241px] group-hover:text-txt-blue`}
`;

export const StyledImageWrapper = styled.div`
  ${tw`max-w-[120px] w-full h-[120px]`}
`;
