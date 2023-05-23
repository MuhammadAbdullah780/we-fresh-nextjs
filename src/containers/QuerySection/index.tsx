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
    <SectionWrapper className="px-0">
      <FlexColumn className="gap-5 py-2">
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
        <FlexColumn className="w-full h-max gap-2">
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
        </FlexColumn>
        {/* STILL HAVE A QUESTION DIV */}
        <FlexColumn className="gap-6 py-3 w-[90%] sm:w-full h-max ">
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
        </FlexColumn>
        {/* CONTACT INFO DIV'S */}
        <FlexCenter className="w-full px-3 !flex-col sm:!flex-row  h-max gap-3">
          {stillHaveAQuestion.stillHaveAQuestionInfoCollection.items.map(
            (item, i) => (
              <InfoBox key={i} data={item.infoContent} />
            ),
          )}
        </FlexCenter>
      </FlexColumn>
    </SectionWrapper>
  );
};

export default index;
