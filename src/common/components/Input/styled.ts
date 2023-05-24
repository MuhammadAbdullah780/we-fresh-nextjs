import styled from "styled-components";
import tw from "twin.macro";

export const InputStyled = styled.input<{ height: string }>`
  ${tw`outline-none border-2 border-light-grey w-[170px] lg:w-[300px] px-2 py-1 md:py-0 rounded-4`}
  height: ${({ height }) => `${height}px;`}
`;
