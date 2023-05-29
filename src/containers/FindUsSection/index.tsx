import React, { useState } from "react";
// Components
import ActionButton from "../../common/components/Button";
import TextInput from "../../common/components/Input";
import Modal from "../../common/components/Modal";
import RichTextRenderer from "../../common/components/RichTextRenderer";
import SectionHeadings from "../../common/components/SectionHeadings";
import SectionWrapper from "../../common/components/SectionWrapper";
import SvgWrapper from "../../common/components/SvgWrapper";
// Types Imports
import { Button, ImageType, RichText } from "../../Types";
import { FormWrapper } from "../../common/GlobalStyles/styled";
import {
  FindUsImageWrapper,
  FindUsLeftContainer,
  FindUsRightContainer,
  FindUsWrapper,
} from "./styled";
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
    <SectionWrapper
      paddingTop={{ sm: 51, md: 51, lg: 154, xl: 154, "2xl": 154 }}
      paddingBottom={{ sm: 50, md: 50, lg: 135, xl: 135, "2xl": 135 }}
      className="h-full md:max-h-[702px]">
      {/* MODAL */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <p>You Entered {area}</p>
      </Modal>
      <FindUsWrapper>
        {/* FORM */}
        <FindUsLeftContainer>
          {/* Title */}
          <SectionHeadings className="w-full max- md:!justify-start text-center md:!text-left">
            <RichTextRenderer
              json={data.findUsTitle.json}
              h3Style="text-txt-blue !w-full"
              paraStyle="hidden"
            />
          </SectionHeadings>
          {/* Form */}
          <FormWrapper flexGap={3}>
            <TextInput
              placeholder="Enter your area"
              type="text"
              state={area}
              onChangeFunc={handleChange}
            />
            <ActionButton
              onClickFunc={handelSubmit}
              backgroundcolor={data?.findUsButton.backgroundColor}>
              {data.findUsButton.text}
            </ActionButton>
          </FormWrapper>
        </FindUsLeftContainer>
        {/* IMAGE */}
        <FindUsRightContainer>
          <FindUsImageWrapper>
            <img
              src={data.findUsImage.url}
              alt={data.findUsImage.title}
              className="w-full h-full"
            />
          </FindUsImageWrapper>
        </FindUsRightContainer>
      </FindUsWrapper>
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
