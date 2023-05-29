import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Components
import FlexCenter from "../../common/components/FlexCenter";
import FlexColumn from "../../common/components/FlexColumn";
import RichTextRenderer from "../../common/components/RichTextRenderer";
import SectionHeadings from "../../common/components/SectionHeadings";
import SectionWrapper from "../../common/components/SectionWrapper";
import SvgWrapper from "../../common/components/SvgWrapper";
import AppDetailsComponent from "../../partials/AppDetailsComponent";
import ServicesWrapper from "../../partials/ServicesWrapper";
// Styles
import "swiper/css";
// Type Imports
import { ImageType, RichText } from "../../Types";
import {
  OurAppContainer,
  OurAppLeftContainer,
  ServiceDescriptionsWrapper,
  ServicesImageWrapper,
  ServicesSectionWrapper,
  SliderContainer,
  YellowSvgWrapper,
} from "./styled";
// Types
type SliderDescription = {
  description: RichText;
};

type Slider = {
  servicesSliderTitle: string;
  servicesSliderImage: ImageType;
  servicesSliderDescriptionCollection: {
    items: SliderDescription[];
  };
};

type Props = {
  data: {
    servicesImage: ImageType;
    servicesTitle: RichText;
    servicesSliderContentCollection: {
      items: Slider[];
    };
  };
};

const index = ({ data }: Props) => {
  const screensPadding = {
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
    ["2xl"]: 0,
  };
  const [activeSlideNumber, setActiveSlideNumber] = useState(0);

  const handleSwipeChange = (activeIndex: number) =>
    setActiveSlideNumber(activeIndex);

  const handleTouchChange = (dataId: number) => setActiveSlideNumber(dataId);

  return (
    <SectionWrapper
      paddingBottom={screensPadding}
      paddingLeft={screensPadding}
      paddingRight={screensPadding}
      paddingTop={screensPadding}>
      <ServicesSectionWrapper>
        <SliderContainer>
          {/* Title */}
          <SectionHeadings className="block m-auto max-w-[445px] w-full h-[70px] text-center">
            <RichTextRenderer
              h3Style="section-heading"
              json={data.servicesTitle.json}
            />
          </SectionHeadings>
          {/* Slider */}
          <div className="mb-10">
            <Swiper
              className="bg-swiper-bg lg:bg-white"
              spaceBetween={50}
              slidesPerView={1.7}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2.7,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              onSlideChange={(swiper) => {
                let { activeIndex, slides } = swiper;
                handleSwipeChange(activeIndex);
              }}>
              {data?.servicesSliderContentCollection.items.map((item, i) => {
                return (
                  <SwiperSlide
                    className="bg-white h-[220px] w-[186px]"
                    key={i}
                    onClick={() => handleTouchChange(i)}>
                    <ServicesWrapper
                      src={item.servicesSliderImage.url}
                      text={item.servicesSliderTitle}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </SliderContainer>
        {/* OUR APP SECTION */}
        <OurAppContainer>
          <OurAppLeftContainer>
            {/* Image */}
            <ServicesImageWrapper>
              <SvgWrapper
                src={data.servicesImage.url}
                alt={data.servicesImage.title}
                className="h-full w-full relative"
              />
            </ServicesImageWrapper>
            <YellowSvgWrapper>
              <Image
                src="/OurAppIcons/YellowCircle.svg"
                alt="YellowCircle"
                width={448}
                height={444}
              />
            </YellowSvgWrapper>
          </OurAppLeftContainer>
          {/* Slider Descriptions */}
          <ServiceDescriptionsWrapper>
            {data.servicesSliderContentCollection.items[
              activeSlideNumber
            ].servicesSliderDescriptionCollection.items.map((item, i) => {
              return (
                <AppDetailsComponent key={i}>
                  <RichTextRenderer
                    paraStyle="!w-full"
                    h5Style="text-txt-blue f-22 w-full"
                    json={item.description.json}
                  />
                </AppDetailsComponent>
              );
            })}
          </ServiceDescriptionsWrapper>
        </OurAppContainer>
      </ServicesSectionWrapper>
    </SectionWrapper>
  );
};

export default index;
