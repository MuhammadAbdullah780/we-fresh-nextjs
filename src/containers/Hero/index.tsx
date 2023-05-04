import React, { useState } from "react";
import InputComponent from "../../common/components/Input";
import ActionButton from "../../common/components/Button";
import { AppleIconSvg } from "../../common/components/Icons";
import SectionWrapper from "../../common/components/SectionWrapper";
import FlexCenter from "../../common/components/FlexCenter";
import FlexColumn from "../../common/components/FlexColumn";
import LeftBlueSvg from "../../../public/HeroSectionPng/LeftBlueImage.svg";
import SvgWrapper from "../../common/components/SvgWrapper";
import Image from "next/image";

const index = () => {
  const [number, setNumber] = useState<number>();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNumber(Number(event.target.value));
  };

  return (
    // HERO SECTION
    <SectionWrapper className="flex items-center pt-24 justify-center overflow-hidden">
      {/* SVG'S */}
      {/* THE LEFT BLUE ONE */}
      <SvgWrapper
        src="/HeroSectionPng/LeftBlueImage.svg"
        className="absolute lg:rotate-0 rotate-90 scale-[2.2] sm:scale-[2] lg:scale-100 top-[-25%] sm:top-[-48%] lg:top-[0%] left-[-20%] sm:left-[-23%] md:left-[-16%] lg:left-[-22%] xl:left-[-10%] 2xl:left-[0%] -z-10  sm:h-full w-full h-[397px] sm:max-h-[689px] xl:max-h-[889px] xl:max-w-[1139px]"
      />
      {/* LIGHT BLUE SVG */}
      <SvgWrapper
        src="/HeroSectionPng/LightBlueImage.svg"
        className="w-full h-full max-w-[557px] xl:max-w-[657px] max-h-[392px] xl:max-h-[492px] absolute -z-20 left-[-15%] sm:left-[-4%] md:left-[8%] lg:left-[3%] xl:left-[8%] 2xl:left-[15%] top-[15%] sm:top-[15%] md:top-[25%] lg:top-[40%] xl:top-[30%] 2xl:top-[33%]"
      />
      {/* LIGHT BLUE NAVBAR SVG */}
      <SvgWrapper
        src="/HeroSectionPng/LightBlueNavbarImage.svg"
        className="h-full -z-10 w-full hidden lg:block max-w-[632px] xl:max-w-[732px] max-h-[548px] xl:max-h-[548px] absolute top-[-30%] lg:top-[-34%] xl:top-[-35%] 2xl:top-[-34%] left-[50%] lg:left-[46%] xl:left-[50%]"
      />

      {/* RIGHT BLUE SVG */}
      <SvgWrapper
        src="/HeroSectionPng/RightBlueImage.svg"
        className="w-full h-full hidden lg:block max-h-[347px] xl:max-h-[397px] absolute lg:top-[2%] xl:top-[3%] 2xl:top-[5%] lg:right-[-20%] xl:right-[-16%] 2xl:right-[-10%] max-w-[418px] xl:max-w-[468px] -z-20"
      />

      <FlexCenter className="gap-[5rem] sm:gap-[10rem] lg:gap-7 w-full flex-col lg:flex-row !justify-center lg:!justify-around">
        {/* LEFT SIDE FORM DIV */}
        <FlexColumn className="p-7 lg:p-5 gap-5  lg:!items-start">
          {/* H2 HEADING */}
          <h2 className="text-[22px] mb-2 md:text-3xl lg:text-3xl xl:text-[42px] text-white">
            The smarter way
            <br />
            <strong className="w-full md:pt-[10px] block max-w-[481px]">
              to order your food
            </strong>
          </h2>
          {/* FORM DIV */}
          <FlexCenter className="gap-3">
            <InputComponent
              type="number"
              state={number}
              onChangeFunc={handleChange}
              height="35px"
              width="300px"
              placeholder="Enter Phone Number."
            />
            <ActionButton className="h-[35px]">Send</ActionButton>
          </FlexCenter>
          {/* SOCIAL ICONS */}
          <FlexColumn className="gap-2 lg:!items-start">
            <p className="text-white !w-fit lg:w-full">Available on</p>
            <FlexCenter className="!items-start gap-5">
              {/* APPLE STORE ICON */}
              <AppleIconSvg height="45px" width="45px" />
              {/* GOOGLE PLAYSTORE ICON */}
              <SvgWrapper src="/HeroSectionPng/Googleplay.png" className="relative h-[45px] w-[45px]" />
            </FlexCenter>
          </FlexColumn>
        </FlexColumn>
        {/* IMAGE SECTION AREA */}
        <div className="w-full max-w-[291px]  relative">
          {/* IPHONE BLACK IMAGE */}
          <SvgWrapper src="/HeroSectionPng/iPhone_Black.png" className="h-[319px] relative sm:h-[580px] block m-auto  max-w-[161px] sm:max-w-[291px] " />
          {/* YELLOW SVG */}
          <SvgWrapper src="/HeroSectionPng/Yellow.svg" className="h-[242px] sm:h-[398px] xl:h-[448px] w-[280px] sm:w-[468px] xl:w-[518px] absolute -z-10 bottom-[-5%] sm:bottom-[-4%] lg:bottom-[-5%] xl:bottom-[-10%] left-[4%] sm:left-[-25%] lg:left-[-35%]" />
        </div>
      </FlexCenter>
    </SectionWrapper>
  );
};

export default index;