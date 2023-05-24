import React, { useState } from "react";
// Components
import ActionButton from "../../common/components/Button";
import FlexCenter from "../../common/components/FlexCenter";
import Modal from "../../common/components/Modal";
import RichTextRenderer from "../../common/components/RichTextRenderer";
import SectionHeadings from "../../common/components/SectionHeadings";
import SectionWrapper from "../../common/components/SectionWrapper";
import SvgWrapper from "../../common/components/SvgWrapper";
import TextInput from "../../common/components/Input";
// Types Imports
import { Button, ImageType, RichText } from "../../Types";
// Types
type Props = {
  data: {
    findUsButton: Button;
    findUsImage: ImageType;
    findUsTitle: RichText;
  };
};

const index = ({ data }: Props) => {
  const [area, setArea] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => setIsOpen(false);

  const handelSubmit = () => {
    if (!area) {
      return alert("Please Enter a Specific Value");
    }
    setIsOpen(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setArea(event.target.value);

  return (
    <SectionWrapper className="h-full md:max-h-[702px] lg:pt-[154px] lg:pb-[135px] !flex items-center overflow-hidden justify-center">
      {/* MODAL */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <p>You Entered {area}</p>
      </Modal>
      <FlexCenter className="md:my-24 gap-28 md:gap-14 flex-col md:!flex-row h-[calc(100%-80px)] w-full md:w-[calc(100%-80px)] !justify-evenly overflow-x-visible">
        {/* FORM */}
        <div className="flex w-full gap-4 flex-col">
          {/* Title */}
          <SectionHeadings className="w-full max- md:!justify-start text-center md:!text-left">
            <RichTextRenderer
              json={data.findUsTitle.json}
              h3Style="text-txt-blue !w-full"
              paraStyle="hidden"
            />
          </SectionHeadings>
          {/* Form */}
          <FlexCenter className="gap-3 justify-center md:!justify-start ">
            <TextInput
              placeholder="Enter your area"
              type=""
              state={area}
              onChangeFunc={handleChange}
              height="35px"
            />
            <ActionButton
              onClickFunc={handelSubmit}
              backgroundColor={data?.findUsButton.backgroundColor}>
              {data.findUsButton.text}
            </ActionButton>
          </FlexCenter>
        </div>
        {/* IMAGE */}
        <div className="h-full max-h-[207px] sm:max-h-[350px] md:max-h-[420px] lg:max-h-[702px]  w-full max-w-[694px] flex items-center justify-center  ">
          <div className="flex-1 w-full h-[207px] sm:h-full max-w-[310px] sm:max-w-[420px] md:max-w-[540px] overflow-visible">
            <img
              className="w-full h-full"
              src={data.findUsImage.url}
              alt={data.findUsImage.title}
            />
          </div>
        </div>
      </FlexCenter>
      {/* SVG DIVS */}
      {/* BLUE COLORED SVG */}
      <div className="absolute h-[315px] sm:h-[580px] lg:h-[630px] w-[404px] lg:w-[500px] xl:w-[807px] -z-20 top-[40%] sm:top-[17%] md:top-[1%] lg:top-[4%] xl:top-[2%] right-[0%] sm:right-[0%] md:right-[-8%] lg:right-[-10%] xl:right-[-12%]">
        <SvgWrapper
          className="relative h-full w-full "
          src="/FindUsSectionAssets/Blue.svg"
        />
      </div>
      {/* YELLOW COLOURED SVG */}
      <div className="absolute h-[199px] sm:h-[297px] lg:h-[397px] w-[234px] sm:w-[300px] lg:w-[400px] xl:w-[468px] bottom-[-4%] sm:bottom-[-4%] md:bottom-[17%] lg:bottom-[10%] xl:bottom-[7%] right-[38%] sm:right-[25%] md:right-[15%] lg:right-[9%] xl:right-[18%] -z-10">
        {/* <FindUsSectionYellowSvg /> */}
        <SvgWrapper
          className="relative h-full w-full "
          src="/FindUsSectionAssets/Yellow.svg"
        />
      </div>
    </SectionWrapper>
  );
};

export default index;
