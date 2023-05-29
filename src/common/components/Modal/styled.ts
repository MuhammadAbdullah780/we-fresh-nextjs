import { styled } from "styled-components";
import { FlexCenterStyled } from "../../GlobalStyles/styled";
import tw from "twin.macro";

export const MyModal = styled(FlexCenterStyled)`
  ${tw`fixed inset-0 z-50`}
`;

export const ModalOverlay = styled.div`
  ${tw`fixed inset-0 bg-gray-900 opacity-50`}
`;

export const ModalContent = styled.div`
  ${tw`relative z-[70] bg-white w-full max-w-[600px] mx-3 rounded-lg p-6`}
`;

export const ModalCloseButton = styled.button`
  ${tw`absolute w-[25px] h-[25px] top-[35%] right-5 text-gray-500 hover:text-gray-800`}
`;
