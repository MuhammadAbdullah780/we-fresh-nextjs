import { useRef } from "react";
import { Document } from "@contentful/rich-text-types";
// Components
import RichTextRenderer from "../../common/components/RichTextRenderer";
// Styled Imports
import {
  AccordionAnswerContainer,
  AccordionAnswerWrapper,
  AccordionQuestionContainer,
  AccordionWrapper,
} from "./styled";
// Type Imports
import { RichText } from "../../Types";
// Types
type AccordianProps = {
  paragraph: RichText;
  heading: RichText;
  id: number | string;
  isOpen: number | boolean;
  toggleFunc: (id: number) => void;
};

const index: React.FC<AccordianProps> = ({
  paragraph,
  heading,
  toggleFunc,
  id,
  isOpen,
}) => {
  return (
    <AccordionWrapper>
      <AccordionQuestionContainer onClick={() => toggleFunc(Number(id))}>
        <RichTextRenderer json={heading.json} />
      </AccordionQuestionContainer>
      <AccordionAnswerWrapper id={id.toString()}>
        <AccordionAnswerContainer>
          <RichTextRenderer
            json={paragraph.json}
            h5Style="text-txt-blue"
            paraStyle="sm:max-w-[679px] transition-all duration-500 w-full"
          />
        </AccordionAnswerContainer>
      </AccordionAnswerWrapper>
    </AccordionWrapper>
  );
};

export default index;
