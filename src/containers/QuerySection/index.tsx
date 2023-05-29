import { useState } from "react";
// Components
import FlexCenter from "../../common/components/FlexCenter";
import FlexColumn from "../../common/components/FlexColumn";
import RichTextRenderer from "../../common/components/RichTextRenderer";
import SectionWrapper from "../../common/components/SectionWrapper";
import Accordian from "../../partials/Accordian";
import InfoBox from "../../partials/InfoBox";
// Type Imports
import { RichText } from "../../Types";
import {
  InfoBoxWrapper,
  QueryContainer,
  QueryDescription,
  QuestionWrapper,
} from "./styled";
// Types
type InfoContent = {
  infoContent: RichText;
};

type AccordionStuff = {
  question: RichText;
  answer: RichText;
};

type Props = {
  gotQuestions: {
    gotQuestionsDescription: RichText;
    gotQuestionsTitle: RichText;
    gotQuestionsQuestionsCollection: {
      items: AccordionStuff[];
    };
  };
  stillHaveAQuestion: {
    stillHaveAQuestionTitle: RichText;
    stillHaveAQuestionDescription: RichText;
    stillHaveAQuestionInfoCollection: {
      items: InfoContent[];
    };
  };
};

const index = ({ gotQuestions, stillHaveAQuestion }: Props) => {
  const screensPadding = {
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
    ["2xl"]: 0,
  };

  const [isShown, setIsShown] = useState<number[]>([]);
  const [isMultiple, setIsMultiple] = useState<boolean>(true);

  const handleToggle = (id: number) => {
    if (isMultiple) {
      // CHECKING IF THE ARRAY LENGTH IS EMPTY OR NOT
      if (isShown.includes(id)) {
        setIsShown(isShown.filter((i) => i !== id));
      } else {
        setIsShown([...isShown, id]);
      }
    } else {
      // ONE TIME WITH SWITCHING LOGIC
      if (isShown.length !== 0) {
        if (isShown.includes(id)) {
          setIsShown([]);
        } else {
          setIsShown([id]);
        }
      } else {
        setIsShown([id]);
      }
    }
    const element = document.getElementById(id.toString());

    const elementHeight = element?.style.height;
    if (element) {
      if (!elementHeight || elementHeight === "0px" || elementHeight == "0") {
        const expectedHeight = element?.scrollHeight;
        element.style.height = `${expectedHeight}px`;
      } else {
        element.style.height = `0px`;
      }
    }
  };

  return (
    <SectionWrapper paddingLeft={screensPadding} paddingRight={screensPadding}>
      <QueryContainer>
        {/* Title */}
        <RichTextRenderer
          json={gotQuestions.gotQuestionsTitle.json}
          h3Style="section-heading"
          paraStyle="hidden"
        />
        {/* Description */}
        <RichTextRenderer
          json={gotQuestions.gotQuestionsDescription.json}
          paraStyle="max-w-[294px] sec-desc w-full md:text-f-22 text-center"
        />
        {/* QUESTIONS */}
        <QuestionWrapper>
          {gotQuestions.gotQuestionsQuestionsCollection.items.map(
            (item, index) => {
              return (
                <Accordian
                  key={index}
                  id={index}
                  toggleFunc={handleToggle}
                  isOpen={isShown.includes(index)}
                  heading={item.question}
                  paragraph={item.answer}
                />
              );
            },
          )}
        </QuestionWrapper>
        {/* STILL HAVE A QUESTION DIV */}
        <QueryDescription>
          {/* Title */}
          <RichTextRenderer
            json={stillHaveAQuestion.stillHaveAQuestionTitle.json}
            h3Style="section-heading"
            paraStyle="hidden"
          />
          {/* Description */}
          <RichTextRenderer
            json={stillHaveAQuestion.stillHaveAQuestionDescription.json}
            paraStyle="max-w-[704px] md:text-f-22 sec-desc w-full text-center"
          />
        </QueryDescription>
        {/* CONTACT INFO DIV'S */}
        <InfoBoxWrapper>
          {stillHaveAQuestion.stillHaveAQuestionInfoCollection.items.map(
            (item, i) => (
              <InfoBox key={i} data={item.infoContent} />
            ),
          )}
        </InfoBoxWrapper>
      </QueryContainer>
    </SectionWrapper>
  );
};

export default index;
