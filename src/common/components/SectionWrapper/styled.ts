import styled from "styled-components";
import tw from "twin.macro";
import { SectionWrapperType } from "./types";

export const SectionContainer = styled.section<{ zIndex?: number }>`
  ${tw`relative block w-screen`}
  z-index: ${({ zIndex }) => zIndex};
`;

export const Wrapper = styled.div<SectionWrapperType>`
  ${tw`block m-auto  w-full`}

  padding-top: ${({ paddingTop }) =>
    paddingTop ? `${paddingTop?.sm}px` : "40px"};
  padding-bottom: ${({ paddingBottom }) =>
    paddingBottom ? `${paddingBottom?.sm}px` : "40px"};
  padding-right: ${({ paddingRight }) =>
    paddingRight ? `${paddingRight?.sm}px` : "0px"};
  padding-left: ${({ paddingLeft }) =>
    paddingLeft ? `${paddingLeft?.sm}px` : "0px"};
  overflow: ${({ overFlow }) => (overFlow ? overFlow : "hidden")};
  display: ${({ display }) => (display ? display : "flex")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  max-width: ${({ maxWidth }) => maxWidth || "1440px"};

  @media (min-width: 640px) {
    padding-top: ${({ paddingTop }) =>
      paddingTop ? `${paddingTop?.sm}px` : "40px"};
    padding-bottom: ${({ paddingBottom }) =>
      paddingBottom ? `${paddingBottom?.sm}px` : "40px"};
    padding-right: ${({ paddingRight }) =>
      paddingRight ? `${paddingRight?.sm}px` : "0px"};
    padding-left: ${({ paddingLeft }) =>
      paddingLeft ? `${paddingLeft?.sm}px` : "0px"};
    height: ${({ height }) => (height ? `${height?.sm}px` : "max-content")};
  }

  @media (min-width: 768px) {
    padding-top: ${({ paddingTop }) =>
      paddingTop ? `${paddingTop?.md}px` : "64px"};
    padding-bottom: ${({ paddingBottom }) =>
      paddingBottom ? `${paddingBottom?.md}px` : "64px"};
    padding-right: ${({ paddingRight }) =>
      paddingRight ? `${paddingRight?.md}px` : "0px"};
    padding-left: ${({ paddingLeft }) =>
      paddingLeft ? `${paddingLeft?.md}px` : "0px"};
    height: ${({ height }) => (height ? `${height?.md}px` : "max-content")};
  }

  @media (min-width: 1024px) {
    padding-top: ${({ paddingTop }) =>
      paddingTop ? `${paddingTop?.lg}px` : "64px"};
    padding-bottom: ${({ paddingBottom }) =>
      paddingBottom ? `${paddingBottom?.lg}px` : "64px"};
    padding-right: ${({ paddingRight }) =>
      paddingRight ? `${paddingRight?.lg}px` : "40px"};
    padding-left: ${({ paddingLeft }) =>
      paddingLeft ? `${paddingLeft?.lg}px` : "40px"};
    height: ${({ height }) => (height ? `${height?.lg}px` : "max-content")};
  }

  @media (min-width: 1280px) {
    padding-top: ${({ paddingTop }) =>
      paddingTop ? `${paddingTop?.xl}px` : "64px"};
    padding-bottom: ${({ paddingBottom }) =>
      paddingBottom ? `${paddingBottom?.xl}px` : "64px"};
    padding-right: ${({ paddingRight }) =>
      paddingRight ? `${paddingRight?.xl}px` : "40px"};
    padding-left: ${({ paddingLeft }) =>
      paddingLeft ? `${paddingLeft?.xl}px` : "40px"};
    height: ${({ height }) => (height ? `${height?.xl}px` : "max-content")};
  }

  @media (min-width: 1536px) {
    padding-top: ${({ paddingTop }) =>
      paddingTop ? `${paddingTop["2xl"]}px` : "64px"};
    padding-bottom: ${({ paddingBottom }) =>
      paddingBottom ? `${paddingBottom["2xl"]}px` : "64px"};
    padding-right: ${({ paddingRight }) =>
      paddingRight ? `${paddingRight["2xl"]}px` : "40px"};
    padding-left: ${({ paddingLeft }) =>
      paddingLeft ? `${paddingLeft["2xl"]}px` : "40px"};
    height: ${({ height }) => (height ? `${height["2xl"]}px` : "max-content")};
  }
`;
