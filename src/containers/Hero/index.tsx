import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// Components
import ActionButton from "../../common/components/Button";
import FlexCenter from "../../common/components/FlexCenter";
import FlexColumn from "../../common/components/FlexColumn";
import InputComponent from "../../common/components/Input";
import Modal from "../../common/components/Modal";
import RichTextRenderer from "../../common/components/RichTextRenderer";
import SectionHeading from "../../common/components/SectionHeadings";
import SectionWrapper from "../../common/components/SectionWrapper";
import SvgWrapper from "../../common/components/SvgWrapper";
// Styled imports
import { FormWrapper } from "../../common/GlobalStyles/styled";
// Type imports
import { Button, ImageType, LinkType, RichText } from "../../Types";
import {
  HeroContentWrapper,
  HeroIconWrapper,
  HeroImageContainer,
  HeroImageWrapper,
  HeroLinkWrapper,
  LeftDivWrapper,
} from "./styled";
// Types
type HeroProps = {
  data: {
    heroButton: Button;
    heroImage: ImageType;
    heroLinksCollection: {
      items: LinkType[];
    };
    heroTitle: RichText;
  };
};

const index = ({ data }: HeroProps) => {
  const [number, setNumber] = useState<number>();
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => setIsOpen(false);

  const handelSubmit = () => {
    if (!number) {
      return alert("Please Enter a Specific Value");
    }
    setIsOpen(true);
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(target.value));
  };

  return (
    <SectionWrapper
      overFlow="hidden"
      paddingTop={{ sm: 56, md: 80, lg: 112, xl: 112, "2xl": 112 }}>
      {/* MODAL */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <p>You Entered {number}</p>
      </Modal>
      {/* SVG'S */}
      {/* SMALL SCREEN LIGHT BLUE SVG */}
      <SvgWrapper
        src="/HeroSectionPng/SmallScreenLightBlue.png"
        className="absolute sm:hidden block h-[492px] w-[657px] -z-20 right-[10%] small-mobile:right-[20%] top-[3%] small-mobile:top-[5%] "
      />
      {/* BLUE IMAGE FOR SMALL SCREEN DEVICES */}
      <SvgWrapper
        src="/HeroSectionPng/SmallScreenBlueImage.png"
        className="block sm:hidden w-[468px] small-mobile:w-full h-[447px] small-mobile:h-[497px] top-[-6%] small-mobile:top-[-10%] absolute -z-10"
      />
      {/* THE LEFT BLUE ONE */}
      <SvgWrapper
        src="/HeroSectionPng/LeftBlueImage.svg"
        className="absolute lg:rotate-0 rotate-90 hidden sm:block scale-[2.2] sm:scale-[2] lg:scale-100 sm:top-[-46%] md:top-[-40%] lg:top-[0%] left-[-17%] md:left-[-12%] lg:left-[-22%] xl:left-[-10%] 2xl:left-[0%] -z-10 h-full w-full max-h-[397px] sm:max-h-[689px] xl:max-h-[889px] xl:max-w-[1139px]"
      />
      {/* LIGHT BLUE SVG */}
      <SvgWrapper
        src="/HeroSectionPng/LightBlueImage.svg"
        className="h-full hidden sm:block w-[657px] absolute -z-20 left-[-15%] md:left-[2%] lg:left-[-8%] xl:left-[5%] 2xl:left-[15%] top-[-15%] md:top-[-11%] lg:top-[10%] xl:top-[15%] 2xl:top-[17%]"
      />
      {/* LIGHT BLUE NAVBAR SVG */}
      <SvgWrapper
        src="/HeroSectionPng/LightBlueNavbarImage.svg"
        className="h-full -z-10 w-full hidden lg:block max-w-[632px] xl:max-w-[732px] max-h-[548px] xl:max-h-[548px] absolute top-[-22%] lg:top-[-34%] xl:top-[-35%] 2xl:top-[-34%] left-[50%] lg:left-[46%] xl:left-[50%]"
      />
      {/* RIGHT BLUE SVG */}
      <SvgWrapper
        src="/HeroSectionPng/RightBlueImage.svg"
        className="w-full h-full hidden lg:block max-h-[347px] xl:max-h-[397px] absolute lg:top-[2%] xl:top-[3%] 2xl:top-[5%] lg:right-[-20%] xl:right-[-16%] 2xl:right-[-10%] max-w-[418px] xl:max-w-[468px] -z-20"
      />

      <HeroContentWrapper>
        {/* LEFT SIDE FORM DIV */}
        <LeftDivWrapper>
          {/* H2 HEADING */}
          <SectionHeading className="text-white">
            <RichTextRenderer json={data?.heroTitle.json} />
          </SectionHeading>
          {/* FORM DIV */}
          <FormWrapper flexGap={3}>
            <InputComponent
              type="number"
              state={number}
              onChangeFunc={handleChange}
              placeholder="Enter phone number"
            />
            <ActionButton
              backgroundcolor={data?.heroButton.backgroundColor}
              onClickFunc={handelSubmit}>
              {data?.heroButton.text}
            </ActionButton>
          </FormWrapper>
          {/* SOCIAL ICONS */}
          <HeroIconWrapper>
            <p className="text-white !w-fit lg:w-full">Available on</p>
            <HeroLinkWrapper>
              {data?.heroLinksCollection.items.map((item, i) => (
                <Link
                  href={item.link}
                  key={i}
                  className="relative w-[45px] h-[45px]">
                  <SvgWrapper src={item?.image.url} alt={item?.image.title} />
                </Link>
              ))}
            </HeroLinkWrapper>
          </HeroIconWrapper>
        </LeftDivWrapper>
        {/* IMAGE SECTION AREA */}
        <HeroImageContainer>
          {/* IPHONE BLACK IMAGE */}
          <HeroImageWrapper>
            <Image
              src={data?.heroImage.url}
              alt={data?.heroImage.title}
              fill={true}
            />
          </HeroImageWrapper>
          {/* YELLOW SVG */}
          <SvgWrapper
            src="/HeroSectionPng/Yellow.svg"
            className="h-[242px] sm:h-[398px] xl:h-[448px] w-[280px] sm:w-[468px] xl:w-[518px] absolute -z-10 bottom-[-5%] sm:bottom-[-4%] lg:bottom-[-5%] xl:bottom-[-10%] left-[4%] sm:left-[-25%] lg:left-[-35%]"
          />
        </HeroImageContainer>
      </HeroContentWrapper>
    </SectionWrapper>
  );
};

export default index;
