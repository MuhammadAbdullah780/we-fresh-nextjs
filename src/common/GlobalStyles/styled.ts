import styled from "styled-components";
import tw from "twin.macro";

export const FlexCenterStyled = styled.div`
  ${tw`flex items-center flex-row justify-center`}
`;

export const FlexColumnStyled = styled.div`
  ${tw`flex items-center justify-center flex-col`}
`;

const gapVariants = {
  3: tw`gap-3`,
  6: tw`gap-6`,
};

export const FormWrapper = styled(FlexCenterStyled)<{ flexGap: 3 | 6 }>`
  ${tw`px-3 small-mobile:px-0 justify-center md:!justify-start`}
  ${({ flexGap }) => gapVariants[flexGap]}
`;
