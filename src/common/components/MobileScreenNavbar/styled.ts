import styled from "styled-components";
import { FlexColumnStyled } from "../../GlobalStyles/styled";
import tw from "twin.macro";

export const NavbarSmallWrapper = styled(FlexColumnStyled)<{
  isShown: boolean;
}>`
  ${tw`px-5 z-20 transition-all absolute pt-[95px] !items-start gap-5 !justify-start top-0 right-0 bg-navbar-bg h-screen w-full`}
  transform: ${({ isShown }) =>
    isShown ? "translateY(0%)" : "translateY(-100%)"}
`;

export const NavbarLinksWrapper = styled.div`
  ${tw`flex text-white font-normal items-start flex-col gap-3 mb-5 justify-center`}
  .link-small {
    ${tw`hover:scale-105 transition-transform duration-300`}
  }
`;

export const Divider = styled.div`
  ${tw`divide-y h-[1px] mb-4 bg-light-grey w-full`}
`;
