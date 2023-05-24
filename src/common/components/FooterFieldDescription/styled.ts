import styled from "styled-components";
import { FlexColumnStyled } from "../../GlobalStyles/styled";
import tw from "twin.macro";

export const FieldDescriptionWrapper = styled(FlexColumnStyled)`
  ${tw`md:p-4 py-5 cursor-pointer md:items-start md:py-0 gap-4`}
`;

export const LinksWrapper = styled.ul`
  ${tw`w-full`}
`;
