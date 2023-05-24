import styled from "styled-components";
import tw from "twin.macro";

export const Header = styled.header`
  ${tw`absolute w-full top-0 left-0  pt-[15px]`}
`;

export const NavBar = styled.nav`
  ${tw`flex items-center pl-[19px] pr-[20px] z-30 md:pl-0 md:pr-0 justify-between md:justify-around`}
`;

export const NavLinks = styled.ul`
  ${tw`md:flex gap-8 hidden`}
  .link {
    ${tw`hover:scale-105 transition-transform duration-300`}
  }
`;

export const ToggleButtonWrapper = styled.div`
  ${tw`w-5 h-5 mr-3 block md:hidden`}
`;
