import Accordian from "../../partials/Accordian";
import FlexCenter from '../../common/components/FlexCenter'
import FlexColumn from "../../common/components/FlexColumn";
import SubHeading from "../../common/components/SubHeadings";
import InfoBox from '../../partials/InfoBox'
import SectionWrapper from "../../common/components/SectionWrapper";
import React, { useState } from "react";

const index = () => {
  const [isShown, setIsShown] = useState<number | null>(null);
  const handleToggle = (id: number) => {
    (isShown !== null) ? setIsShown(null) : setIsShown(id)
  };
  const accordianData = [
    {
      heading: "How to get started?",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi!",
    },
    {
      heading: "How to get started?",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi!",
    },
    {
      heading: "How to get started?",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi!",
    },
    {
      heading: "How to get started?",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi!",
    },
    {
      heading: "How to get started?",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur cum vero consectetur ab eius excepturi nisi!",
    },
  ];
  return (
    <SectionWrapper className="h-full px-0 max-h-[1375px]">
      <FlexColumn className="gap-5 py-2">
        <SubHeading text="Got Questions?" />
        <p className="max-w-[294px] w-full text-center">
          Perfect, we've got answers!
        </p>
        {/* QUESTIONS */}
        <FlexColumn className="w-full h-max gap-2">
          {accordianData.map((item, index) => {
            return (
              <Accordian
                key={index}
                id={index}
                toggleFunc={handleToggle}
                isOpen={isShown === index}
                heading={item.heading}
                paragraph={item.paragraph}
              />
            );
          })}
        </FlexColumn>
        {/* STILL HAVE A QUESTION DIV */}
        <FlexColumn className="gap-6 py-3 w-[90%] sm:w-full h-max ">
          <SubHeading text="Still have a question?" />
          <p className="max-w-[704px] w-full text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </FlexColumn>
        {/* CONTACT INFO DIV'S */}
        <FlexCenter className="w-full !flex-col sm:!flex-row  h-max gap-3">
          <InfoBox
            heading="+66 8959888"
            paragraph="Lorem ipsum dolor sit amet, consectetur"
          />
          <InfoBox
            heading="Support@service.com"
            paragraph="Lorem ipsum dolor sit amet, consectetur"
          />
        </FlexCenter>
      </FlexColumn>
    </SectionWrapper>
  );
};

export default index;