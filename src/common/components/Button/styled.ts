import styled from "styled-components";
import tw from "twin.macro";

export const ButtonStyled = styled.button<{
  height?: string;
  backgroundcolor?: string;
}>`
  background-color: ${({ backgroundcolor }) => `${backgroundcolor}`};
  height: ${({ height }) => (height && `${height}px;`) || "35px;"}
    ${tw` w-[100px] lg:w-[140px] rounded-4 active:scale-95 transition-opacity delay-300`};
`;
