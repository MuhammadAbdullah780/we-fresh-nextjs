import styled from "styled-components";
import tw from "twin.macro";

export const SectionContainer = styled.section<{ zIndex?: number }>`
  ${tw`relative block w-screen`}
  z-index: ${({ zIndex }) => `${zIndex}` || `0`};
`;

export const Wrapper = styled.div`
  ${tw`py-10 md:py-16 lg:px-10 block m-auto  w-full max-w-[1440px]`}
`;
