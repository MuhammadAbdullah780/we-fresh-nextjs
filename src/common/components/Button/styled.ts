import styled from "styled-components";
import tw from "twin.macro";

export const ButtonStyled = styled.button<{
  height?: string;
  backgroundColor?: string;
}>`
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  height: ${({ height }) => (height && `${height}px;`) || "35px;"}
    ${tw` w-[100px] lg:w-[140px] rounded-4 active:scale-95`};
`;
