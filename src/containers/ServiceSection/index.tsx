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
  const [activeSlideNumber, setActiveSlideNumber] = useState(0);

  const handleSwipeChange = (activeIndex: number) =>
    setActiveSlideNumber(activeIndex);

  const handleTouchChange = (dataId: number) => setActiveSlideNumber(dataId);

  return (
    <SectionWrapper className="!p-0">
      <div className="sm:space-y-32 w-full py-5 sm:py-10">
        <div className="gap-3 space-y-5 lg:space-y-10 py-5">
          {/* Title */}
          <SectionHeadings className="block m-auto max-w-[445px] w-full h-[70px] text-center">
            <RichTextRenderer
              h3Style="section-heading"
              json={data.servicesTitle.json}
            />
          </SectionHeadings>
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
        </div>
        {/* OUR APP SECTION */}
        <FlexCenter className="gap-8 flex-col pt-14 sm:pt-0 md:h-[1069px] lg:max-h-[770px] lg:flex-row w-full !justify-center lg:justify-evenly ">
          <FlexCenter className="relative h-max">
            {/* Image */}
            <div className=" absolute h-[319px] sm:h-[580px] w-full max-w-[161px] sm:max-w-[291px]">
              <SvgWrapper
                src={data.servicesImage.url}
                alt={data.servicesImage.title}
                className="h-full w-full relative"
              />
            </div>
            <div className="sm:h-[444px] h-[242px] w-[280px] sm:w-[448px] ">
              <Image
                src="/OurAppIcons/YellowCircle.svg"
                alt="YellowCircle"
                width={448}
                height={444}
              />
            </div>
          </FlexCenter>
          {/* Slider Descriptions */}
          <FlexColumn className="gap-3  pt-[17px] px-[20px] sm:px-0 sm:!pt-[5px] sm:mt-7">
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
          </FlexColumn>
        </FlexCenter>
      </div>
    </SectionWrapper>
  );
};

export default index;
