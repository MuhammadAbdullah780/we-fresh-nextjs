// Components
import FlexCenter from "../../common/components/FlexCenter";
import FlexColumn from "../../common/components/FlexColumn";
import RichTextRenderer from "../../common/components/RichTextRenderer";
import SectionHeadings from "../../common/components/SectionHeadings";
import SectionWrapper from "../../common/components/SectionWrapper";
import SvgWrapper from "../../common/components/SvgWrapper";
// Type Imports
import { ImageType, RichText } from "../../Types";
import {
  OurPartnersContainer,
  OurPartnersContentContainer,
  OurPartnersContentWrapper,
  OurPartnersImagesContainer,
  OurPartnersImagesWrapper,
  OurPartnersLeftContainer,
} from "./styled";
// Types
type Props = {
  data: {
    ourPartnersTitle: RichText;
    ourPartnersDescription: RichText;
    ourPartnersImageCollection: {
      items: ImageType[];
    };
  };
};

const index = ({ data }: Props) => {
  return (
    <SectionWrapper className="lg:!p-10 md:py-0 !pb-0 !pt-10 md:pt-0 h-max !px-0">
      <OurPartnersContainer>
        {/* OUR PARTNERS */}
        <OurPartnersContentWrapper>
          <OurPartnersLeftContainer>
            {/* BLUE BG SVG */}
            <SvgWrapper
              src="/OurPartnersSection/Blue.svg"
              className="-z-10 w-[473px] h-[354px] lg:w-[547px] lg:h-[410px] "
            />
            {/* CONTENT INSIDE SVG */}
            <OurPartnersContentContainer>
              {/* Title */}
              <SectionHeadings className="lg:!justify-start text-center w-full h-full max-h-[70px]">
                <RichTextRenderer
                  h3Style="lg:text-left !w-full text-txt-blue"
                  json={data.ourPartnersTitle.json}
                />
              </SectionHeadings>
              {/* Description */}
              <RichTextRenderer
                paraStyle="small-mobile:!w-full small-mobile:!max-w-[326px]"
                json={data.ourPartnersDescription.json}
              />
            </OurPartnersContentContainer>
          </OurPartnersLeftContainer>
        </OurPartnersContentWrapper>
        {/* ABSOLUTE IMAGES */}
        <OurPartnersImagesContainer>
          <OurPartnersImagesWrapper>
            {/* TOP_LEFT CIRCLE */}
            <SvgWrapper
              src={data.ourPartnersImageCollection.items[0].url}
              alt={data.ourPartnersImageCollection.items[0].title}
              className="h-[91px] md:h-[130px] xl:h-[175px] absolute top-[0%] left-[5%] w-[91px] md:w-[130px] xl:w-[175px]"
            />
            {/* CENTRAL CIRCLE */}
            <SvgWrapper
              src={data.ourPartnersImageCollection.items[1].url}
              alt={data.ourPartnersImageCollection.items[1].title}
              className="h-[91px] md:h-[130px] w-[91px] md:w-[130px] xl:w-[175px] xl:h-[175px] absolute"
            />
            {/* BOTTOM RIGHT CIRCLE */}
            <SvgWrapper
              src={data.ourPartnersImageCollection.items[3].url}
              alt={data.ourPartnersImageCollection.items[3].title}
              className="h-[91px] md:h-[130px] xl:h-[175px] absolute bottom-[0%] right-[5%] w-[91px] md:w-[130px] xl:w-[175px]"
            />
            {/* BOTTOM LEFT CIRCLE */}
            <SvgWrapper
              src={data.ourPartnersImageCollection.items[4].url}
              alt={data.ourPartnersImageCollection.items[4].title}
              className="h-[91px] md:h-[130px] xl:h-[175px] absolute bottom-[10%]  left-[10%] w-[91px] md:w-[130px] xl:w-[175px]"
            />
            {/* TOP_RIGHT CIRCLE */}
            <SvgWrapper
              src={data.ourPartnersImageCollection.items[2].url}
              alt={data.ourPartnersImageCollection.items[2].title}
              className="h-[91px] md:h-[130px] xl:h-[175px] w-[91px] md:w-[130px] xl:w-[175px] absolute top-[10%] right-[10%] "
            />
          </OurPartnersImagesWrapper>
        </OurPartnersImagesContainer>
      </OurPartnersContainer>
    </SectionWrapper>
  );
};

export default index;
